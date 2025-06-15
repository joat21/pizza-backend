/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Category` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `DoughType` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `DoughType` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `PizzaSize` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `PizzaSize` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `categoryId` on the `Pizza` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `doughTypeId` on the `PizzaVariant` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `pizzaSizeId` on the `PizzaVariant` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Pizza" DROP CONSTRAINT "Pizza_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "PizzaVariant" DROP CONSTRAINT "PizzaVariant_doughTypeId_fkey";

-- DropForeignKey
ALTER TABLE "PizzaVariant" DROP CONSTRAINT "PizzaVariant_pizzaSizeId_fkey";

-- AlterTable
ALTER TABLE "Category" DROP CONSTRAINT "Category_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Category_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "DoughType" DROP CONSTRAINT "DoughType_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "DoughType_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Pizza" DROP COLUMN "categoryId",
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PizzaSize" DROP CONSTRAINT "PizzaSize_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "PizzaSize_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "PizzaVariant" DROP COLUMN "doughTypeId",
ADD COLUMN     "doughTypeId" INTEGER NOT NULL,
DROP COLUMN "pizzaSizeId",
ADD COLUMN     "pizzaSizeId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Pizza" ADD CONSTRAINT "Pizza_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PizzaVariant" ADD CONSTRAINT "PizzaVariant_doughTypeId_fkey" FOREIGN KEY ("doughTypeId") REFERENCES "DoughType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PizzaVariant" ADD CONSTRAINT "PizzaVariant_pizzaSizeId_fkey" FOREIGN KEY ("pizzaSizeId") REFERENCES "PizzaSize"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
