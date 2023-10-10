-- CreateTable
CREATE TABLE "HomeWebSession" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "refresh1" TEXT NOT NULL,
    "refresh2" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "HomeWebSession_username_key" ON "HomeWebSession"("username");
