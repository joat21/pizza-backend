/*
  Warnings:

  - Added the required column `overviewImageUrl` to the `Pizza` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Pizza` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pizza" ADD COLUMN     "overviewImageUrl" TEXT NOT NULL default '',
ADD COLUMN     "slug" TEXT NOT NULL default '';
