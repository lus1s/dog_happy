-- Adminer 4.8.1 MySQL 5.5.5-10.5.24-MariaDB-1:10.5.24+maria~ubu2004 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP DATABASE IF EXISTS `bd_doguinhos`;
CREATE DATABASE `bd_doguinhos` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `bd_doguinhos`;

DROP TABLE IF EXISTS `tb_pet`;
CREATE TABLE `tb_pet` (
  `id_pet` int(11) NOT NULL AUTO_INCREMENT,
  `dono_pet` varchar(200) NOT NULL,
  `telefone_dono` varchar(200) NOT NULL,
  `cpf_dono` varchar(20) NOT NULL,
  `senha_dono` varchar(50) NOT NULL,
  `email_dono` varchar(50) NOT NULL,
  `identificacao_pet` int(14) NOT NULL,
  `nome_pet` varchar(200) NOT NULL,
  `especie_pet` varchar(200) NOT NULL,
  `raca_pet` varchar(200) NOT NULL,
  `servico_oferecido` varchar(20) NOT NULL,
  PRIMARY KEY (`id_pet`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- 2024-04-14 01:00:10
