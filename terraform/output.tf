output "frontend_url" {
  value = local.frontend_url
}

output "backend_url" {
  value = yandex_serverless_container.pizza_backend.url
}