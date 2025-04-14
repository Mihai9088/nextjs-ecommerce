/*
  Warnings:

  - You are about to drop the column `IsFeatured` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "IsFeatured",
ADD COLUMN     "isFeatured" BOOLEAN NOT NULL DEFAULT false;
