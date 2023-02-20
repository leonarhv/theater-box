/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Theater` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `country` to the `Theater` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Theater" ADD COLUMN     "country" TEXT NOT NULL,
ALTER COLUMN "opening_date" DROP NOT NULL,
ALTER COLUMN "capacity" DROP NOT NULL,
ALTER COLUMN "history" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Theater_name_key" ON "Theater"("name");
