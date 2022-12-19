-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 19, 2022 at 09:26 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `assessment-db`
--

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20221219051548-create-statics.js'),
('20221219051645-create-yearlystatics.js');

-- --------------------------------------------------------

--
-- Table structure for table `statics`
--

CREATE TABLE `statics` (
  `id` int NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `value` int DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `persent` int DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `statics`
--

INSERT INTO `statics` (`id`, `title`, `value`, `icon`, `persent`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Customer', 2343, 'star-icon', 0, NULL, '2022-12-19 06:25:19', '2022-12-19 06:25:19'),
(2, 'Orders', 2344, 'star-icon', 0, NULL, '2022-12-19 06:25:19', '2022-12-19 06:25:19'),
(3, 'Delivery', 2343, 'star-icon', NULL, NULL, '2022-12-19 06:36:59', '2022-12-19 06:36:59'),
(4, 'Users', 34534, 'star-icon', NULL, NULL, '2022-12-19 06:36:59', '2022-12-19 06:36:59'),
(5, 'Revenue', 4545, 'star-icon', NULL, NULL, '2022-12-19 08:40:53', '2022-12-19 08:40:53'),
(6, 'Rating', 4344, 'star-icon', 0, '', '2022-12-19 08:40:53', '2022-12-19 08:40:53'),
(7, 'Average Revenue Per Customer', 4545, 'star-icon', 0, NULL, '2022-12-19 08:41:57', '2022-12-19 08:41:57'),
(8, 'Average Revenue Per User', 34534, 'star-icon', 0, NULL, '2022-12-19 08:41:57', '2022-12-19 08:41:57');

-- --------------------------------------------------------

--
-- Table structure for table `yearlystatics`
--

CREATE TABLE `yearlystatics` (
  `id` int NOT NULL,
  `month` varchar(255) DEFAULT NULL,
  `value` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `yearlystatics`
--

INSERT INTO `yearlystatics` (`id`, `month`, `value`, `createdAt`, `updatedAt`) VALUES
(1, '1', 500, '2022-12-19 08:45:34', '2022-12-19 08:45:34'),
(2, '2', 400, '2022-12-19 08:45:34', '2022-12-19 08:45:34'),
(3, '3', 440, '2022-12-19 08:45:34', '2022-12-19 08:45:34'),
(4, '4', 600, '2022-12-19 08:45:34', '2022-12-19 08:45:34'),
(5, '5', 200, '2022-12-19 08:45:34', '2022-12-19 08:45:34'),
(6, '6', 344, '2022-12-19 09:17:35', '2022-12-19 09:17:35'),
(7, '7', 100, '2022-12-19 08:45:34', '2022-12-19 08:45:34'),
(8, '8', 410, '2022-12-19 08:45:34', '2022-12-19 08:45:34'),
(9, '9', 260, '2022-12-19 08:45:34', '2022-12-19 08:45:34'),
(10, '10', 390, '2022-12-19 08:45:34', '2022-12-19 08:45:34'),
(11, '11', 430, '2022-12-19 08:45:34', '2022-12-19 08:45:34'),
(12, '12', 456, '2022-12-19 09:18:56', '2022-12-19 09:18:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `statics`
--
ALTER TABLE `statics`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `yearlystatics`
--
ALTER TABLE `yearlystatics`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `statics`
--
ALTER TABLE `statics`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `yearlystatics`
--
ALTER TABLE `yearlystatics`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
