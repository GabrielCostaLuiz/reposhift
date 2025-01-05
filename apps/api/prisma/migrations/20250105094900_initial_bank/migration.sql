-- CreateEnum
CREATE TYPE "TokenType" AS ENUM ('PASSWORD_RECOVER');

-- CreateEnum
CREATE TYPE "AccountProvider" AS ENUM ('GITHUB');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password_hash" TEXT,
    "avatar_url" TEXT,
    "html_url" TEXT NOT NULL,
    "repos_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tokens" (
    "id" TEXT NOT NULL,
    "type" "TokenType" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "provider" "AccountProvider" NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "templates" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "img_template" TEXT NOT NULL,
    "url_github" TEXT NOT NULL,
    "url_demo" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,
    "types" TEXT[],
    "techs" TEXT[],
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserLikedTemplates" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_UserFavoriteTemplates" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_UserDownloadedTemplates" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_account_id_key" ON "accounts"("provider_account_id");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_user_id_key" ON "accounts"("provider", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "_UserLikedTemplates_AB_unique" ON "_UserLikedTemplates"("A", "B");

-- CreateIndex
CREATE INDEX "_UserLikedTemplates_B_index" ON "_UserLikedTemplates"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_UserFavoriteTemplates_AB_unique" ON "_UserFavoriteTemplates"("A", "B");

-- CreateIndex
CREATE INDEX "_UserFavoriteTemplates_B_index" ON "_UserFavoriteTemplates"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_UserDownloadedTemplates_AB_unique" ON "_UserDownloadedTemplates"("A", "B");

-- CreateIndex
CREATE INDEX "_UserDownloadedTemplates_B_index" ON "_UserDownloadedTemplates"("B");

-- AddForeignKey
ALTER TABLE "tokens" ADD CONSTRAINT "tokens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserLikedTemplates" ADD CONSTRAINT "_UserLikedTemplates_A_fkey" FOREIGN KEY ("A") REFERENCES "templates"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserLikedTemplates" ADD CONSTRAINT "_UserLikedTemplates_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFavoriteTemplates" ADD CONSTRAINT "_UserFavoriteTemplates_A_fkey" FOREIGN KEY ("A") REFERENCES "templates"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFavoriteTemplates" ADD CONSTRAINT "_UserFavoriteTemplates_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserDownloadedTemplates" ADD CONSTRAINT "_UserDownloadedTemplates_A_fkey" FOREIGN KEY ("A") REFERENCES "templates"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserDownloadedTemplates" ADD CONSTRAINT "_UserDownloadedTemplates_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
