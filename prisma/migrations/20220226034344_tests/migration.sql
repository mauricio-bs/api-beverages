/*
  Warnings:

  - You are about to drop the column `sotck_quantity` on the `Beverage` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `Beverage` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to drop the column `description` on the `Category` table. All the data in the column will be lost.
  - Added the required column `name` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Beverage_name_key";

-- AlterTable
ALTER TABLE "Beverage" DROP COLUMN "sotck_quantity",
ADD COLUMN     "stock_quantity" INTEGER DEFAULT 0,
ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "description",
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "isActive" SET DEFAULT true;

-- AlterTable
ALTER TABLE "UserAddress" ALTER COLUMN "complement" DROP NOT NULL,
ALTER COLUMN "referencePoint" DROP NOT NULL;
