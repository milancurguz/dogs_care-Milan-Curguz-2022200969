-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.32-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.7.0.6850
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for dog_care
DROP DATABASE IF EXISTS `dog_care`;
CREATE DATABASE IF NOT EXISTS `dog_care` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `dog_care`;

-- Dumping structure for table dog_care.dog
DROP TABLE IF EXISTS `dog`;
CREATE TABLE IF NOT EXISTS `dog` (
  `dog_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `breed` varchar(50) NOT NULL,
  `age` int(2) unsigned NOT NULL,
  `img` varchar(255) NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`dog_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table dog_care.dog: ~10 rows (approximately)
INSERT INTO `dog` (`dog_id`, `name`, `breed`, `age`, `img`, `updated_at`, `deleted_at`) VALUES
	(1, 'Rex', 'Labrador', 3, 'https://www.dogster.com/wp-content/uploads/2024/01/Labrador-Retriever-dog-standing-on-the-lawn_Radomir-Rezny_Shutterstock.jpg', NULL, NULL),
	(2, 'Bella', 'German Shepherd', 5, 'https://www.akc.org/wp-content/uploads/2017/11/German-Shepherd-on-White-00.jpg', NULL, NULL),
	(3, 'Max', 'Beagle', 2, 'https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg', NULL, NULL),
	(4, 'Lucy', 'Bulldog', 4, 'https://cdn.britannica.com/07/234207-050-0037B589/English-bulldog-dog.jpg', NULL, NULL),
	(5, 'Charlie', 'Poodle', 1, 'https://www.metlifepetinsurance.com/content/dam/metlifecom/us/metlifepetinsurance/poodle-breeds-min.webp', NULL, NULL),
	(6, 'Daisy', 'Golden Retriever', 3, 'https://image.petmd.com/files/inline-images/golden-retriever-2.jpg?VersionId=9HAclc1bWh8XvyNoGi2.UxpdEp1gygb_', NULL, NULL),
	(7, 'Rocky', 'Boxer', 6, 'https://cdn.britannica.com/46/233846-050-8D30A43B/Boxer-dog.jpg', NULL, NULL),
	(8, 'Molly', 'Dalmatian', 2, 'https://cdn.britannica.com/47/236047-050-F06BFC5E/Dalmatian-dog.jpg', NULL, NULL),
	(9, 'Buddy', 'Cocker Spaniel', 4, 'https://www.akc.org/wp-content/uploads/2017/11/English-Cocker-Spaniel-Slide03.jpg', NULL, NULL),
	(10, 'Lola', 'Shih Tzu', 1, 'https://www.akc.org/wp-content/uploads/2017/11/Shih-Tzu-On-White-01.jpg', NULL, NULL);

-- Dumping structure for table dog_care.dog_owner
DROP TABLE IF EXISTS `dog_owner`;
CREATE TABLE IF NOT EXISTS `dog_owner` (
  `dog_owner_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `dog_id` int(10) unsigned NOT NULL,
  `owner_id` int(10) unsigned NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`dog_owner_id`),
  KEY `fk_dog_owner_dog_id` (`dog_id`),
  KEY `fk_dog_owner_owner_id` (`owner_id`),
  CONSTRAINT `fk_dog_owner_dog_id` FOREIGN KEY (`dog_id`) REFERENCES `dog` (`dog_id`) ON UPDATE CASCADE,
  CONSTRAINT `fk_dog_owner_owner_id` FOREIGN KEY (`owner_id`) REFERENCES `owner` (`owner_id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table dog_care.dog_owner: ~9 rows (approximately)
INSERT INTO `dog_owner` (`dog_owner_id`, `dog_id`, `owner_id`, `updated_at`, `deleted_at`) VALUES
	(1, 1, 1, NULL, NULL),
	(2, 1, 2, NULL, NULL),
	(3, 2, 3, NULL, NULL),
	(4, 3, 4, NULL, NULL),
	(5, 4, 5, NULL, NULL),
	(6, 5, 1, NULL, NULL),
	(7, 6, 6, NULL, NULL),
	(8, 7, 8, NULL, NULL),
	(9, 8, 7, NULL, NULL);

-- Dumping structure for table dog_care.owner
DROP TABLE IF EXISTS `owner`;
CREATE TABLE IF NOT EXISTS `owner` (
  `owner_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`owner_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table dog_care.owner: ~8 rows (approximately)
INSERT INTO `owner` (`owner_id`, `first_name`, `last_name`, `address`, `updated_at`, `deleted_at`) VALUES
	(1, 'John', 'Doe', '123 Elm St', NULL, NULL),
	(2, 'Jane', 'Smith', '456 Maple St', NULL, NULL),
	(3, 'Michael', 'Johnson', '789 Oak St', NULL, NULL),
	(4, 'Emily', 'Davis', '321 Pine St', NULL, NULL),
	(5, 'Chris', 'Brown', '654 Birch St', NULL, NULL),
	(6, 'Sarah', 'Williams', '987 Cedar St', NULL, NULL),
	(7, 'David', 'Miller', '741 Willow St', NULL, NULL),
	(8, 'Emma', 'Wilson', '852 Spruce St', NULL, NULL);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
