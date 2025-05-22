terraform {
  required_providers {
    yandex = {
      source = "yandex-cloud/yandex"
    }
  }
}

provider "yandex" {
  service_account_key_file = "key.json"
  cloud_id                 = var.cloud_id
  folder_id                = var.folder_id
  zone                     = var.zone
}

locals {
  frontend_url  = "https://${yandex_storage_bucket.frontend_bucket.bucket}.website.yandexcloud.net"
  postgres_host = yandex_mdb_postgresql_cluster.pizza_pg.host[0].fqdn
  database_url  = "postgresql://${var.pg_user}:${var.pg_password}@${local.postgres_host}:6432/${var.pg_name}"
}

# Сеть + подсеть
resource "yandex_vpc_network" "pizza_network" {
  name = "pizza-network"
}

resource "yandex_vpc_subnet" "pizza_subnet" {
  name           = "pizza-subnet"
  zone           = var.zone
  network_id     = yandex_vpc_network.pizza_network.id
  v4_cidr_blocks = ["10.0.1.0/24"]
}

# Бакет для хостинга фронтенда 
resource "yandex_storage_bucket" "frontend_bucket" {
  bucket    = var.frontend_bucket_name
  folder_id = var.folder_id

  website {
    index_document = "index.html"
    error_document = "index.html"
  }

  anonymous_access_flags {
    read = true
  }
}

# Кластер PostgreSQL
resource "yandex_mdb_postgresql_cluster" "pizza_pg" {
  name        = "pizza-pg-cluster"
  environment = "PRODUCTION"
  network_id  = yandex_vpc_network.pizza_network.id

  config {
    version = "15"

    resources {
      resource_preset_id = "b1.medium"
      disk_type_id       = "network-hdd"
      disk_size          = 10
    }

    backup_window_start {
      hours   = 20
      minutes = 0
    }
  }

  host {
    zone      = var.zone
    subnet_id = yandex_vpc_subnet.pizza_subnet.id
  }
}

resource "yandex_mdb_postgresql_database" "pizza_db" {
  cluster_id = yandex_mdb_postgresql_cluster.pizza_pg.id
  name       = var.pg_name
  owner      = var.pg_user

  depends_on = [
    yandex_mdb_postgresql_user.pizza_user
  ]
}

resource "yandex_mdb_postgresql_user" "pizza_user" {
  cluster_id = yandex_mdb_postgresql_cluster.pizza_pg.id
  name       = var.pg_user
  password   = var.pg_password
}

# Контейнер для бэкенда
resource "yandex_serverless_container" "pizza_backend" {
  name = "pizza-backend"

  image {
    url = "cr.yandex/${var.registry_id}/pizza-backend:latest"
    environment = {
      NODE_ENV             = "production"
      DATABASE_URL         = local.database_url
      GITHUB_CLIENT_ID     = var.github_client_id
      GITHUB_CLIENT_SECRET = var.github_client_secret
      GITHUB_CALLBACK_URL  = var.github_callback_url
      FRONTEND_URL         = local.frontend_url
      JWT_ACCESS_SECRET    = var.jwt_access_secret
      JWT_REFRESH_SECRET   = var.jwt_refresh_secret
    }
  }

  memory = 512
  cores  = 1

  execution_timeout = "60s"
  concurrency       = 4

  service_account_id = var.service_account_id

  connectivity {
    network_id = yandex_vpc_network.pizza_network.id
  }
}

# Публичный доступ к контейнеру
resource "yandex_serverless_container_iam_binding" "invoker" {
  container_id = yandex_serverless_container.pizza_backend.id
  role         = "serverless-containers.containerInvoker"
  members = [
    "system:allUsers"
  ]
}

# Функция для запуска БД
resource "yandex_function" "db_starter" {
  name               = "db-starter"
  user_hash          = "first-function"
  runtime            = "bash-2204"
  entrypoint         = "db-starter.sh"
  memory             = "128"
  execution_timeout  = "10"
  service_account_id = var.service_account_id

  environment = {
      CLUSTER_ID = yandex_mdb_postgresql_cluster.pizza_pg.id
  }

  content {
      zip_filename = "scripts/db-starter.sh"
  }

  depends_on = [
    yandex_mdb_postgresql_cluster.pizza_pg
  ]
}

# Таймер для запуска БД каждое воскресение в 6 утра
resource "yandex_function_trigger" "db_starter_timer" {
  name = "db-starter"

  function {
    id                 = yandex_function.db_starter.id
    service_account_id = var.service_account_id
  }
  timer {
    cron_expression = "0 6 ? * SUN"
  }

  depends_on = [
    yandex_function.db_starter
  ]
}

# Функция для остановки БД
resource "yandex_function" "db_stopper" {
  name               = "db-stopper"
  user_hash          = "first-function"
  runtime            = "bash-2204"
  entrypoint         = "db-stopper.sh"
  memory             = "128"
  execution_timeout  = "10"
  service_account_id = var.service_account_id

  environment = {
      CLUSTER_ID = yandex_mdb_postgresql_cluster.pizza_pg.id
  }

  content {
      zip_filename = "scripts/db-stopper.sh"
  }

  depends_on = [
    yandex_mdb_postgresql_cluster.pizza_pg
  ]
}

# Таймер для остановки БД каждый понедельник в час ночи
resource "yandex_function_trigger" "db_stopper_timer" {
  name = "db-stopper"

  function {
    id                 = yandex_function.db_stopper.id
    service_account_id = var.service_account_id
  }
  timer {
    cron_expression = "0 1 ? * MON"
  }

  depends_on = [
    yandex_function.db_stopper
  ]
}
