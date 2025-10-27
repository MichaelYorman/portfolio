-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 27.10.2025 klo 09:09
-- Palvelimen versio: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `muotiopas`
--

-- --------------------------------------------------------

--
-- Rakenne taululle `item`
--

CREATE TABLE `item` (
  `item_id` int(11) NOT NULL,
  `item_name` varchar(50) NOT NULL,
  `item_type` enum('headwear','bodywear','handwear','legwear','footwear','accessories') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Rakenne taululle `list`
--

CREATE TABLE `list` (
  `id` int(11) NOT NULL,
  `list_name` varchar(255) NOT NULL,
  `place_name` varchar(255) NOT NULL,
  `place_type` varchar(255) NOT NULL,
  `purpose` varchar(255) NOT NULL,
  `vehicle` varchar(255) NOT NULL,
  `weather` varchar(255) NOT NULL,
  `temperature` varchar(255) NOT NULL,
  `headwear` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`headwear`)),
  `bodywear` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`bodywear`)),
  `handwear` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`handwear`)),
  `legwear` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`legwear`)),
  `footwear` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`footwear`)),
  `accessory` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`accessory`)),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vedos taulusta `list`
--

INSERT INTO `list` (`id`, `list_name`, `place_name`, `place_type`, `purpose`, `vehicle`, `weather`, `temperature`, `headwear`, `bodywear`, `handwear`, `legwear`, `footwear`, `accessory`, `created_at`, `updated_at`) VALUES
(7, 'asdfasdfasdf', '', '[\"residentialarea\",\"countryside\"]', '[\"camping\",\"foraging\"]', '[\"watervehicle\"]', '[\"clear\"]', '', '[]', '[]', '[]', '[]', '[]', '[]', '2025-10-27 06:44:53', '2025-10-27 06:44:53'),
(8, 'fghfghfghfghfgh', '', '[\"forest\"]', '[\"hangingout\"]', '[\"foot\"]', '[\"clear\"]', '', '[]', '[]', '[]', '[]', '[]', '[]', '2025-10-27 08:07:38', '2025-10-27 08:07:38');

-- --------------------------------------------------------

--
-- Rakenne taululle `listrow`
--

CREATE TABLE `listrow` (
  `user_list_row_id` int(11) NOT NULL,
  `user_list_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Rakenne taululle `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `list`
--
ALTER TABLE `list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `listrow`
--
ALTER TABLE `listrow`
  ADD PRIMARY KEY (`user_list_row_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `item`
--
ALTER TABLE `item`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `list`
--
ALTER TABLE `list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `listrow`
--
ALTER TABLE `listrow`
  MODIFY `user_list_row_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
