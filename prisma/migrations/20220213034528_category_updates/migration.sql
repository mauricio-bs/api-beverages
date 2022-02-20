/*
  Warnings:

  - You are about to drop the column `path` on the `Beverage` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `BeverageCategories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Beverage" DROP COLUMN "path",
ADD COLUMN     "imageUrl" TEXT,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "sotck_quantity" SET DEFAULT 0,
ALTER COLUMN "isActive" SET DEFAULT true;

-- AlterTable
ALTER TABLE "BeverageCategories" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
