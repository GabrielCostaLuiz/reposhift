/*
  Warnings:

  - Added the required column `img_template` to the `templates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url_demo` to the `templates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url_github` to the `templates` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "templates" ADD COLUMN     "img_template" TEXT NOT NULL,
ADD COLUMN     "url_demo" TEXT NOT NULL,
ADD COLUMN     "url_github" TEXT NOT NULL;
