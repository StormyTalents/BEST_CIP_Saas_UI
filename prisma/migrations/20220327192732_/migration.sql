/*
  Warnings:

  - You are about to drop the column `type_id` on the `products` table. All the data in the column will be lost.
  - You are about to alter the column `handle` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "type_id",
ADD COLUMN     "type" VARCHAR(255),
ALTER COLUMN "handle" SET DATA TYPE VARCHAR(255);
