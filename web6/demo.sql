-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th8 08, 2021 lúc 03:21 PM
-- Phiên bản máy phục vụ: 10.4.17-MariaDB
-- Phiên bản PHP: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `demo`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(1, 'nguyen van a', '$2b$10$a2/rx/35DFsjJDTovLJoyu//B9xGuKFrT8MTlZxyHS/nDSWpyVfES');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `catalog`
--

CREATE TABLE `catalog` (
  `idCat` int(11) NOT NULL,
  `nameCat` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `catalog`
--

INSERT INTO `catalog` (`idCat`, `nameCat`) VALUES
(1, 'SAMSUNG'),
(2, 'XIAOMI'),
(3, 'OPPO'),
(4, 'NOKIA'),
(5, 'SONY'),
(6, 'VIVO'),
(7, 'HUAWEI'),
(8, 'IPHONE');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `idOrder` int(11) NOT NULL,
  `nameOrder` varchar(225) NOT NULL,
  `imgOrder` varchar(225) NOT NULL,
  `priceOrder` int(11) NOT NULL,
  `quantityOrder` int(11) NOT NULL,
  `date` varchar(255) NOT NULL,
  `id` int(11) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`idOrder`, `nameOrder`, `imgOrder`, `priceOrder`, `quantityOrder`, `date`, `id`, `status`) VALUES
(9, 'Iphone SE 128GB', 'iphone-se-128gb-2020-trang-600x600.jpg', 21000000, 2, '7-7-2021', 3, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `idProduct` int(11) NOT NULL,
  `nameProduct` varchar(50) DEFAULT NULL,
  `amountProduct` int(11) DEFAULT NULL,
  `imgProduct` varchar(255) DEFAULT NULL,
  `priceProduct` double DEFAULT NULL,
  `dateUpdate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `desProduct` varchar(4000) DEFAULT NULL,
  `idCat` int(11) NOT NULL,
  `sale` int(1) DEFAULT NULL,
  `views` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`idProduct`, `nameProduct`, `amountProduct`, `imgProduct`, `priceProduct`, `dateUpdate`, `desProduct`, `idCat`, `sale`, `views`) VALUES
(2, 'Iphone 12Pro', 10, 'iphone-12-pro-xanh-duong-new-600x600-600x600.jpg', 20000000, '2021-06-07 08:31:50', 'Mọi thông số và mô tả được cung cấp ở đây có thể khác với thông số và mô tả thực tế của sản phẩm. Samsung bảo lưu quyền thay đổi văn bản này và sản phẩm mô tả ở đây bất kỳ lúc nào mà Samsung không có trách nhiệm phải thông báo về sự thay đổi đó. Tất cả chức năng, đặc tính, thông số kỹ thuật, giao diện người dùng (GUI) và các thông tin khác về sản phẩm được cung cấp trong văn bản này bao gồm nhưng không giới hạn đến các lợi ích, thiết kế, giá cả, thành phần, hiệu năng, sự hiện hữu và khả năng của sản phẩm có thể thay đổi mà không cần thông báo hay phải gánh chịu bất kỳ trách nhiệm nào. Nội dung trên màn hình là hình mô phỏng và chỉ cho mục đích minh họa.', 8, 1, 5),
(3, 'Iphone SE 128GB', 30, 'iphone-se-128gb-2020-trang-600x600.jpg', 21000000, '2021-06-07 08:32:40', 'Mọi thông số và mô tả được cung cấp ở đây có thể khác với thông số và mô tả thực tế của sản phẩm. Samsung bảo lưu quyền thay đổi văn bản này và sản phẩm mô tả ở đây bất kỳ lúc nào mà Samsung không có trách nhiệm phải thông báo về sự thay đổi đó. Tất cả chức năng, đặc tính, thông số kỹ thuật, giao diện người dùng (GUI) và các thông tin khác về sản phẩm được cung cấp trong văn bản này bao gồm nhưng không giới hạn đến các lợi ích, thiết kế, giá cả, thành phần, hiệu năng, sự hiện hữu và khả năng của sản phẩm có thể thay đổi mà không cần thông báo hay phải gánh chịu bất kỳ trách nhiệm nào. Nội dung trên màn hình là hình mô phỏng và chỉ cho mục đích minh họa.', 8, 1, 50),
(5, 'Xiaomi 10T Pro', 40, 'xiaomi-mi-10t-pro-den-600x600.jpg', 10000000, '2021-06-07 08:33:21', 'Mọi thông số và mô tả được cung cấp ở đây có thể khác với thông số và mô tả thực tế của sản phẩm. Samsung bảo lưu quyền thay đổi văn bản này và sản phẩm mô tả ở đây bất kỳ lúc nào mà Samsung không có trách nhiệm phải thông báo về sự thay đổi đó. Tất cả chức năng, đặc tính, thông số kỹ thuật, giao diện người dùng (GUI) và các thông tin khác về sản phẩm được cung cấp trong văn bản này bao gồm nhưng không giới hạn đến các lợi ích, thiết kế, giá cả, thành phần, hiệu năng, sự hiện hữu và khả năng của sản phẩm có thể thay đổi mà không cần thông báo hay phải gánh chịu bất kỳ trách nhiệm nào. Nội dung trên màn hình là hình mô phỏng và chỉ cho mục đích minh họa.', 2, 1, 0),
(6, 'Vivo Y51', 9, 'vivo-y51-bac-600x600-600x600.jpg', 8000000, '2021-06-07 08:33:49', 'Mọi thông số và mô tả được cung cấp ở đây có thể khác với thông số và mô tả thực tế của sản phẩm. Samsung bảo lưu quyền thay đổi văn bản này và sản phẩm mô tả ở đây bất kỳ lúc nào mà Samsung không có trách nhiệm phải thông báo về sự thay đổi đó. Tất cả chức năng, đặc tính, thông số kỹ thuật, giao diện người dùng (GUI) và các thông tin khác về sản phẩm được cung cấp trong văn bản này bao gồm nhưng không giới hạn đến các lợi ích, thiết kế, giá cả, thành phần, hiệu năng, sự hiện hữu và khả năng của sản phẩm có thể thay đổi mà không cần thông báo hay phải gánh chịu bất kỳ trách nhiệm nào. Nội dung trên màn hình là hình mô phỏng và chỉ cho mục đích minh họa.', 6, 1, 0),
(7, 'Oppo Reno5', 2, 'oppo-reno5-trang-600x600-1-600x600.jpg', 15000000, '2021-06-07 08:34:19', 'Mọi thông số và mô tả được cung cấp ở đây có thể khác với thông số và mô tả thực tế của sản phẩm. Samsung bảo lưu quyền thay đổi văn bản này và sản phẩm mô tả ở đây bất kỳ lúc nào mà Samsung không có trách nhiệm phải thông báo về sự thay đổi đó. Tất cả chức năng, đặc tính, thông số kỹ thuật, giao diện người dùng (GUI) và các thông tin khác về sản phẩm được cung cấp trong văn bản này bao gồm nhưng không giới hạn đến các lợi ích, thiết kế, giá cả, thành phần, hiệu năng, sự hiện hữu và khả năng của sản phẩm có thể thay đổi mà không cần thông báo hay phải gánh chịu bất kỳ trách nhiệm nào. Nội dung trên màn hình là hình mô phỏng và chỉ cho mục đích minh họa.', 3, 1, 0),
(17, 'Oppo X3', 50, 'oppo-find-x3-pro-black-001-1-600x600.jpg', 7000000, '2021-06-07 08:34:50', 'Mọi thông số và mô tả được cung cấp ở đây có thể khác với thông số và mô tả thực tế của sản phẩm. Samsung bảo lưu quyền thay đổi văn bản này và sản phẩm mô tả ở đây bất kỳ lúc nào mà Samsung không có trách nhiệm phải thông báo về sự thay đổi đó. Tất cả chức năng, đặc tính, thông số kỹ thuật, giao diện người dùng (GUI) và các thông tin khác về sản phẩm được cung cấp trong văn bản này bao gồm nhưng không giới hạn đến các lợi ích, thiết kế, giá cả, thành phần, hiệu năng, sự hiện hữu và khả năng của sản phẩm có thể thay đổi mà không cần thông báo hay phải gánh chịu bất kỳ trách nhiệm nào. Nội dung trên màn hình là hình mô phỏng và chỉ cho mục đích minh họa.', 3, 1, 7),
(42, 'Huawei-Y6p', 30, '1625586307990.jpg', 1000000, '2021-07-06 15:45:08', NULL, 7, NULL, 0),
(43, 'SamSung-GalaxyS', 20, '1625586438190.jpg', 14990000, '2021-07-06 15:47:18', NULL, 1, NULL, 0),
(44, 'Nokia-54', 4, '1625586477273.jpg', 300000, '2021-07-06 15:47:57', NULL, 4, NULL, 0),
(45, 'IphoneXI', 7, '1625586636738.jpg', 40000000, '2021-07-06 15:52:11', NULL, 8, NULL, 0),
(46, 'Oppo-A93', 8, '1625586715837.jpg', 1000000, '2021-07-06 15:51:55', NULL, 3, NULL, 0),
(47, 'SamSung-GalaxyXY', 45, '1625586829920.jpg', 4600000, '2021-07-06 15:53:49', NULL, 1, NULL, 0),
(48, 'Iphon12-tim', 6, '1625586880303.jpg', 60000000, '2021-07-06 15:54:40', NULL, 8, NULL, 0),
(49, 'hhb', 330, '1625625894605.jpg', 14990000, '2021-07-07 02:44:56', NULL, 3, NULL, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(225) NOT NULL,
  `lastname` varchar(225) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` int(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `provinces` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `username`, `password`, `phone`, `address`, `provinces`) VALUES
(3, 'a', 'tran', 'mantran@gmail.com', 'nguyenvana', '$2b$10$a2/rx/35DFsjJDTovLJoyu//B9xGuKFrT8MTlZxyHS/nDSWpyVfES', 63635635, 'adsasda', ''),
(6, '', '', '', 'nguyenvanb', '$2b$10$0OT1Es03dWlIXgNpN7JA/.bF9DnGuBc4wGXIPPv7oKhF2H0qE6upe', 0, '', '');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `catalog`
--
ALTER TABLE `catalog`
  ADD PRIMARY KEY (`idCat`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`idOrder`),
  ADD KEY `id` (`id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`idProduct`),
  ADD KEY `idCat` (`idCat`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `catalog`
--
ALTER TABLE `catalog`
  MODIFY `idCat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `idOrder` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `idProduct` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`idCat`) REFERENCES `catalog` (`idCat`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
