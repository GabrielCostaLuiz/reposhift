/*
  Warnings:

  - Added the required column `html_url` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `repos_url` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "html_url" TEXT NOT NULL,
ADD COLUMN     "repos_url" TEXT NOT NULL;
