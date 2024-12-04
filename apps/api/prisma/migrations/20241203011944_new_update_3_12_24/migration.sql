/*
  Warnings:

  - You are about to drop the column `seats` on the `events` table. All the data in the column will be lost.
  - You are about to alter the column `start_date` on the `events` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `end_date` on the `events` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `deletedAt` on the `events` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `expired_at` on the `points` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `start_date` on the `promotions` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `end_date` on the `promotions` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `deletedAt` on the `promotions` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `valid_until` on the `tickets` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `deletedAt` on the `tickets` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `status` on the `transactions` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `deletedAt` on the `transactions` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `deletedAt` on the `users` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `start_date` on the `vouchers` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `end_date` on the `vouchers` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `deletedAt` on the `vouchers` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - A unique constraint covering the columns `[city_name]` on the table `Cities` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Countries` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Event_category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Event_type` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Payment_method` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[region_name]` on the table `Regions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `organizer_id` to the `Events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `events` DROP COLUMN `seats`,
    ADD COLUMN `organizer_id` INTEGER NOT NULL,
    ADD COLUMN `quota` INTEGER NULL,
    ADD COLUMN `status` INTEGER NOT NULL,
    MODIFY `start_date` DATETIME NOT NULL,
    MODIFY `end_date` DATETIME NOT NULL,
    MODIFY `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `deletedAt` DATETIME NULL;

-- AlterTable
ALTER TABLE `points` MODIFY `expired_at` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `promotions` MODIFY `start_date` DATETIME NOT NULL,
    MODIFY `end_date` DATETIME NOT NULL,
    MODIFY `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `deletedAt` DATETIME NULL;

-- AlterTable
ALTER TABLE `tickets` MODIFY `valid_until` DATETIME NOT NULL,
    MODIFY `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `deletedAt` DATETIME NULL;

-- AlterTable
ALTER TABLE `transactions` MODIFY `status` INTEGER NOT NULL DEFAULT 1,
    MODIFY `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `deletedAt` DATETIME NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `organizer_id` INTEGER NULL,
    ADD COLUMN `status` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `deletedAt` DATETIME NULL;

-- AlterTable
ALTER TABLE `vouchers` MODIFY `start_date` DATETIME NOT NULL,
    MODIFY `end_date` DATETIME NOT NULL,
    MODIFY `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `deletedAt` DATETIME NULL;

-- CreateTable
CREATE TABLE `Organizer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deletedAt` DATETIME NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Cities_city_name_key` ON `Cities`(`city_name`);

-- CreateIndex
CREATE UNIQUE INDEX `Countries_name_key` ON `Countries`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Event_category_name_key` ON `Event_category`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Event_type_name_key` ON `Event_type`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Payment_method_name_key` ON `Payment_method`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Regions_region_name_key` ON `Regions`(`region_name`);

-- AddForeignKey
ALTER TABLE `Events` ADD CONSTRAINT `Events_organizer_id_fkey` FOREIGN KEY (`organizer_id`) REFERENCES `Organizer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_organizer_id_fkey` FOREIGN KEY (`organizer_id`) REFERENCES `Organizer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
