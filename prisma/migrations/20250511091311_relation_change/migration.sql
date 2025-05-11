/*
  Warnings:

  - You are about to drop the column `userId` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Job` table. All the data in the column will be lost.
  - Added the required column `clerkId` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clerkId` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_userId_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_userId_fkey";

-- DropIndex
DROP INDEX "Experience_userId_idx";

-- DropIndex
DROP INDEX "Job_userId_idx";

-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "userId",
ADD COLUMN     "clerkId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "userId",
ADD COLUMN     "clerkId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Experience_clerkId_idx" ON "Experience"("clerkId");

-- CreateIndex
CREATE INDEX "Job_clerkId_idx" ON "Job"("clerkId");

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_clerkId_fkey" FOREIGN KEY ("clerkId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_clerkId_fkey" FOREIGN KEY ("clerkId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
