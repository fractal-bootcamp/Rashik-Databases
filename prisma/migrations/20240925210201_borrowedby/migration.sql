/*
  Warnings:

  - You are about to drop the column `memberId` on the `Book` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_memberId_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "memberId",
ADD COLUMN     "currentlyBorrowedById" INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_currentlyBorrowedById_fkey" FOREIGN KEY ("currentlyBorrowedById") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
