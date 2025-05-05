/*
  Warnings:

  - Made the column `doughTypeId` on table `PizzaVariant` required. This step will fail if there are existing NULL values in that column.
  - Made the column `pizzaSizeId` on table `PizzaVariant` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "PizzaVariant" DROP CONSTRAINT "PizzaVariant_doughTypeId_fkey";

-- DropForeignKey
ALTER TABLE "PizzaVariant" DROP CONSTRAINT "PizzaVariant_pizzaSizeId_fkey";

-- AlterTable
ALTER TABLE "PizzaVariant" ALTER COLUMN "doughTypeId" SET NOT NULL,
ALTER COLUMN "pizzaSizeId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "PizzaVariant" ADD CONSTRAINT "PizzaVariant_doughTypeId_fkey" FOREIGN KEY ("doughTypeId") REFERENCES "DoughType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PizzaVariant" ADD CONSTRAINT "PizzaVariant_pizzaSizeId_fkey" FOREIGN KEY ("pizzaSizeId") REFERENCES "PizzaSize"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
