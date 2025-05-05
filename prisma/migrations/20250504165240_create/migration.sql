-- CreateTable
CREATE TABLE "Pizza" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Pizza_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PizzaVariant" (
    "id" TEXT NOT NULL,
    "pizzaId" TEXT NOT NULL,
    "doughTypeId" TEXT,
    "pizzaSizeId" TEXT,
    "price" INTEGER NOT NULL,

    CONSTRAINT "PizzaVariant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DoughType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "DoughType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PizzaSize" (
    "id" TEXT NOT NULL,
    "size" INTEGER NOT NULL,

    CONSTRAINT "PizzaSize_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pizza" ADD CONSTRAINT "Pizza_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PizzaVariant" ADD CONSTRAINT "PizzaVariant_pizzaId_fkey" FOREIGN KEY ("pizzaId") REFERENCES "Pizza"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PizzaVariant" ADD CONSTRAINT "PizzaVariant_doughTypeId_fkey" FOREIGN KEY ("doughTypeId") REFERENCES "DoughType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PizzaVariant" ADD CONSTRAINT "PizzaVariant_pizzaSizeId_fkey" FOREIGN KEY ("pizzaSizeId") REFERENCES "PizzaSize"("id") ON DELETE SET NULL ON UPDATE CASCADE;
