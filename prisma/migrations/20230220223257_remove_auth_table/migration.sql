/*
  Warnings:

  - You are about to drop the `Auth_Token` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Auth_Token" DROP CONSTRAINT "Auth_Token_user_id_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'user';

-- DropTable
DROP TABLE "Auth_Token";
