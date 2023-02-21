-- CreateTable
CREATE TABLE "Auth_Token" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Auth_Token_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Auth_Token_token_key" ON "Auth_Token"("token");

-- AddForeignKey
ALTER TABLE "Auth_Token" ADD CONSTRAINT "Auth_Token_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
