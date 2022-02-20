/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Beverage` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Beverage_name_key" ON "Beverage"("name");
