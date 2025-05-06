/*
  Warnings:

  - Added the required column `mizPrice` to the `Pizza` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pizza" ADD COLUMN     "minPrice" INTEGER NOT NULL DEFAULT 0;
