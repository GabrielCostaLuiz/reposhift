-- CreateTable
CREATE TABLE "templates" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,
    "types" TEXT[],
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
CREATE TABLE "_UserDownloadedTemplates" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserLikedTemplates_AB_unique" ON "_UserLikedTemplates"("A", "B");

-- CreateIndex
CREATE INDEX "_UserLikedTemplates_B_index" ON "_UserLikedTemplates"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_UserDownloadedTemplates_AB_unique" ON "_UserDownloadedTemplates"("A", "B");

-- CreateIndex
CREATE INDEX "_UserDownloadedTemplates_B_index" ON "_UserDownloadedTemplates"("B");

-- AddForeignKey
ALTER TABLE "_UserLikedTemplates" ADD CONSTRAINT "_UserLikedTemplates_A_fkey" FOREIGN KEY ("A") REFERENCES "templates"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserLikedTemplates" ADD CONSTRAINT "_UserLikedTemplates_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserDownloadedTemplates" ADD CONSTRAINT "_UserDownloadedTemplates_A_fkey" FOREIGN KEY ("A") REFERENCES "templates"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserDownloadedTemplates" ADD CONSTRAINT "_UserDownloadedTemplates_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
