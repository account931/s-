-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Фев 27 2017 г., 17:03
-- Версия сервера: 5.7.16-0ubuntu0.16.04.1
-- Версия PHP: 7.0.8-0ubuntu0.16.04.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `seotm`
--

-- --------------------------------------------------------

--
-- Структура таблицы `mod_feedback`
--

CREATE TABLE `mod_feedback` (
  `id` int(11) NOT NULL,
  `fio` varchar(255) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `descr` text,
  `dt` datetime DEFAULT NULL,
  `ip` varchar(44) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `mod_feedback`
--

INSERT INTO `mod_feedback` (`id`, `fio`, `email`, `phone`, `descr`, `dt`, `ip`) VALUES
(1, 'go', NULL, NULL, NULL, NULL, NULL),
(2, 'go', NULL, NULL, NULL, NULL, NULL),
(3, 'go', 'account931@ukr.net', '+380(097)6641342', 'ii', '2017-02-27 04:52:33', '127.0.0.1'),
(4, 'go', 'account931@ukr.net', '+380(097)6641342', '', '2017-02-27 05:00:18', '127.0.0.1'),
(5, 'go', 'account931@ukr.net', '+380(097)6641342', 'text', '2017-02-27 05:01:57', '127.0.0.1');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `mod_feedback`
--
ALTER TABLE `mod_feedback`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `mod_feedback`
--
ALTER TABLE `mod_feedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
