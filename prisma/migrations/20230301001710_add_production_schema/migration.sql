/*
  Warnings:

  - You are about to drop the column `showId` on the `Show_Run` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Show_Run" DROP CONSTRAINT "Show_Run_showId_fkey";

-- AlterTable
ALTER TABLE "Show_Run" DROP COLUMN "showId",
ADD COLUMN     "productionId" TEXT;

-- CreateTable
CREATE TABLE "Production" (
    "id" TEXT NOT NULL,
    "start_date" TIMESTAMP(3),
    "end_date" TIMESTAMP(3),
    "theaterId" TEXT NOT NULL,

    CONSTRAINT "Production_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Show_Run" ADD CONSTRAINT "Show_Run_productionId_fkey" FOREIGN KEY ("productionId") REFERENCES "Production"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Production" ADD CONSTRAINT "Production_theaterId_fkey" FOREIGN KEY ("theaterId") REFERENCES "Theater"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
