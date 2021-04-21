-- CreateTable
CREATE TABLE "TripleColumnThought" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "automaticThought" TEXT NOT NULL,
    "cognitiveDistortion" TEXT NOT NULL,
    "rationaleResponse" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);
