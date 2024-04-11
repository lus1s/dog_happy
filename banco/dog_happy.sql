-- Adminer 4.8.1 MySQL 5.5.5-10.5.23-MariaDB-1:10.5.23+maria~ubu2004 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `tb_pet`;
CREATE TABLE `tb_pet` (
  `id_pet` int(11) NOT NULL AUTO_INCREMENT,
  `nome_pet` varchar(200) NOT NULL,
  `raça_pet` varchar(200) NOT NULL,
  `dono_pet` varchar(200) NOT NULL,
  `telefone_dono` varchar(200) NOT NULL,
  `cpf_dono` int(14) NOT NULL,
  `identificação_pet` int(14) NOT NULL,
  `senha_dono` int(14) NOT NULL,
  `email_dono` int(14) NOT NULL,
  `serviço_oferecido` varchar(20) NOT NULL,
  PRIMARY KEY (`id_pet`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- 2024-04-11 18:27:58
