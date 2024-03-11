-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-03-2024 a las 12:47:21
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `interpolice`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `history`
--

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(150) NOT NULL,
  `fecha` date NOT NULL,
  `nota` varchar(250) NOT NULL,
  `id_people` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `people`
--

CREATE TABLE `people` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `lastname` varchar(150) NOT NULL,
  `nickname` varchar(150) DEFAULT NULL,
  `photo` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `people`
--

INSERT INTO `people` (`id`, `name`, `lastname`, `nickname`, `photo`, `email`, `type`) VALUES
(2, 'Sean', 'Plampeyn', 'Alligator, mississippi', '', 'Camock', 4),
(3, 'Ange', 'Judkin', 'Little cormorant', '', 'Falkous', 4),
(4, 'Alexander', 'Paull', 'Great egret', 'people-1709126177053Incumplimiento de nuestros derechos.jpg', 'McCrow', 4),
(5, 'Tiler', 'Taft', 'Cat, kaffir', '', 'Benjamin', 1),
(6, 'Roselle', 'Kerwood', 'Deer, white-tailed', '', 'Proudler', 2),
(7, 'Cthrine', 'Witham', 'Nile crocodile', '', 'Pyke', 2),
(8, 'Karena', 'Shearston', 'Indian red admiral', '', 'Hetterich', 1),
(9, 'Kaila', 'Willshaw', 'Hornbill, red-billed', '', 'Le Marquis', 3),
(10, 'Terese', 'Karp', 'Eastern dwarf mongoose', '', 'Buesden', 3),
(11, 'Arnoldo', 'Cavozzi', 'Crab-eating fox', '', 'Dummigan', 4),
(12, 'Halsy', 'Ryland', 'Brown antechinus', '', 'Christensen', 3),
(13, 'Hal', 'Bish', 'Mississippi alligator', '', 'Hubbins', 2),
(14, 'Shelley', 'Skillman', 'Gaur', '', 'Behning', 4),
(15, 'Caddric', 'Lightollers', 'Marshbird, brown and yellow', '', 'Fautly', 2),
(16, 'Bronnie', 'Creech', 'Cockatoo, red-tailed', '', 'Klimko', 2),
(17, 'Lissy', 'Paridge', 'Bengal vulture', '', 'Jarrel', 1),
(18, 'Boigie', 'Stitcher', 'Barasingha deer', '', 'Arendsen', 2),
(19, 'Darlleen', 'Niese', 'Peregrine falcon', '', 'Zarb', 2),
(20, 'Daryle', 'Emsley', 'Gecko (unidentified)', '', 'Petricek', 1),
(21, 'Sutherland', 'Trench', 'Antelope, sable', '', 'Revie', 4),
(22, 'Perry', 'Demongeot', 'Cat, jungle', '', 'Keoghan', 1),
(23, 'Eustace', 'Trowsdall', 'Snake, racer', '', 'Zaple', 3),
(24, 'Anissa', 'Triebner', 'Trotter, lily', '', 'Smitherham', 3),
(25, 'Amil', 'Cockshoot', 'Four-spotted skimmer', '', 'Coopey', 2),
(26, 'johm', 'caco', 'killer', '', 'killer@gmail.com', 2),
(27, 'kevin', 'alzate', 'sweet', '', 'ssweet@gmail.com', 1),
(31, 'kevin', 'alzate', 'gg', '', 'gg@gmail.com', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `lastname` varchar(150) NOT NULL,
  `position` varchar(150) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(256) NOT NULL,
  `photo` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `lastname`, `position`, `email`, `password`, `photo`) VALUES
(1, 'chacho', 'perez', 'administrator', 'prz@gmail.com', '12345', 'https://i.imgur.com/9q1fUg1.png'),
(2, 'andres', 'alzate', 'gerente', 'andre@gmail.com', '123', 'https://i.imgur.com/9q1fUg1.png');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `history_ibfk_1` (`id_people`);

--
-- Indices de la tabla `people`
--
ALTER TABLE `people`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `people`
--
ALTER TABLE `people`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `history`
--
ALTER TABLE `history`
  ADD CONSTRAINT `history_ibfk_1` FOREIGN KEY (`id_people`) REFERENCES `people` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
