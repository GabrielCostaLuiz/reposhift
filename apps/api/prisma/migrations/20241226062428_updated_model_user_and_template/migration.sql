-- CreateTable
CREATE TABLE "_UserFavoriteTemplates" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserFavoriteTemplates_AB_unique" ON "_UserFavoriteTemplates"("A", "B");

-- CreateIndex
CREATE INDEX "_UserFavoriteTemplates_B_index" ON "_UserFavoriteTemplates"("B");

-- AddForeignKey
ALTER TABLE "_UserFavoriteTemplates" ADD CONSTRAINT "_UserFavoriteTemplates_A_fkey" FOREIGN KEY ("A") REFERENCES "templates"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFavoriteTemplates" ADD CONSTRAINT "_UserFavoriteTemplates_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
