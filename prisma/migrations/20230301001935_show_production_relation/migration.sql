/*
  Warnings:

  - Added the required column `showId` to the `Production` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Production" ADD COLUMN     "showId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Production" ADD CONSTRAINT "Production_showId_fkey" FOREIGN KEY ("showId") REFERENCES "Show"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
