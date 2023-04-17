# Host: localhost  (Version: 5.5.47)
# Date: 2023-04-17 11:59:38
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "admin"
#

DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `aid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `lname` varchar(50) DEFAULT NULL COMMENT '用户名',
  `password` varchar(50) DEFAULT NULL COMMENT '登录密码',
  `aname` varchar(50) DEFAULT NULL COMMENT '姓名',
  `sex` varchar(10) DEFAULT NULL COMMENT '性别',
  `tel` varchar(50) DEFAULT NULL COMMENT '手机号码',
  `sf` varchar(50) DEFAULT NULL COMMENT '身份',
  PRIMARY KEY (`aid`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

#
# Data for table "admin"
#

/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (4,'admin','1','admin',NULL,NULL,'超级管理员');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;

#
# Structure for table "goods"
#

DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `gid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `tyid` int(11) DEFAULT NULL COMMENT '商品分类',
  `gtitle` varchar(50) DEFAULT NULL COMMENT '商品名称',
  `photo` varchar(50) DEFAULT NULL COMMENT '商品图片',
  `address` varchar(100) DEFAULT NULL COMMENT '商品产地',
  `price` double DEFAULT '0' COMMENT '价格',
  `gmemo` text COMMENT '商品描述',
  `gflag` varchar(50) DEFAULT NULL COMMENT '商品状态',
  PRIMARY KEY (`gid`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

#
# Data for table "goods"
#

/*!40000 ALTER TABLE `goods` DISABLE KEYS */;
INSERT INTO `goods` VALUES (4,4,'可乐（瓶）','/upload/1681663098976.webp','美国',3.5,'口感独特，回味无穷','上架'),(5,4,'雪碧（瓶）','/upload/1681663021849.webp','美国',3.5,'清新爽口，回味无穷','上架'),(6,6,'薯片（袋）','/upload/1681662970134.webp','中国',5,'香脆可口，美味无比','上架'),(7,5,'巧克力（盒）','/upload/1681662902671.webp','瑞士',69,'口感丝滑，回味无穷','上架'),(8,5,'方便面（袋）','/upload/1681662847349.webp','中国',4.5,'方便快捷，美味可口','上架'),(9,5,'饼干（盒）','/upload/1681662642304.jpg','中国',15,'口感酥脆，回味无穷','上架');
/*!40000 ALTER TABLE `goods` ENABLE KEYS */;

#
# Structure for table "goodstype"
#

DROP TABLE IF EXISTS `goodstype`;
CREATE TABLE `goodstype` (
  `tyId` int(11) NOT NULL AUTO_INCREMENT COMMENT '分类ID',
  `tyname` varchar(50) DEFAULT NULL COMMENT '分类名称',
  PRIMARY KEY (`tyId`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

#
# Data for table "goodstype"
#

/*!40000 ALTER TABLE `goodstype` DISABLE KEYS */;
INSERT INTO `goodstype` VALUES (4,'饮料'),(5,'食品'),(6,'日常');
/*!40000 ALTER TABLE `goodstype` ENABLE KEYS */;

#
# Structure for table "helps"
#

DROP TABLE IF EXISTS `helps`;
CREATE TABLE `helps` (
  `hid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `htitle` varchar(50) DEFAULT NULL COMMENT '标题',
  `hdetail` text COMMENT '内容',
  `addtime` datetime DEFAULT NULL COMMENT '发布时间',
  PRIMARY KEY (`hid`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

#
# Data for table "helps"
#

/*!40000 ALTER TABLE `helps` DISABLE KEYS */;
INSERT INTO `helps` VALUES (4,'怎样购买商品','<p style=\"text-indent:2em;\">\r\n\t注册并登录后就可以购买商品了<span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并</span>\r\n</p>\r\n<p style=\"text-indent:2em;\">\r\n\t<span>登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注</span>\r\n</p>\r\n<p style=\"text-indent:2em;\">\r\n\t<span>册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span><span>注册并登录后就可以购买商品了</span>\r\n</p>','2023-04-17 00:12:59'),(5,'如何使用购物车','<p style=\"text-indent:2em;\">\r\n\t登录后在购物车中可以管理购物车中的商品<span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可</span>\r\n</p>\r\n<p style=\"text-indent:2em;\">\r\n\t<span>以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span><span>登录后在购物车中可以管理购物车中的商品</span>\r\n</p>','2023-04-17 00:13:13'),(6,'如何修改个人信息','<p style=\"text-indent:2em;\">\r\n\t登录后在个人中心可以修改自己的个人信息<span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在</span>\r\n</p>\r\n<p style=\"text-indent:2em;\">\r\n\t<span>个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span><span>登录后在个人中心可以修改自己的个人信息</span>\r\n</p>','2023-04-17 00:13:29');
/*!40000 ALTER TABLE `helps` ENABLE KEYS */;

#
# Structure for table "members"
#

DROP TABLE IF EXISTS `members`;
CREATE TABLE `members` (
  `lname` varchar(50) NOT NULL COMMENT '账号',
  `password` varchar(50) DEFAULT NULL COMMENT '登录密码',
  `mname` varchar(50) DEFAULT NULL COMMENT '姓名',
  `phone` varchar(50) DEFAULT NULL COMMENT '手机号码',
  `email` varchar(100) DEFAULT NULL COMMENT 'Email',
  `address` varchar(100) DEFAULT NULL COMMENT '联系地址',
  `addtime` datetime DEFAULT NULL COMMENT '注册时间',
  PRIMARY KEY (`lname`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

#
# Data for table "members"
#

/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES ('bbcbbc','111111','王小萌','13705053466','13705053466@126.com','5号宿舍楼505','2023-04-17 01:13:32'),('byebye','111111','刘晶晶','13666663955','13666663955@133.com','1号宿舍楼105','2023-04-17 00:30:02');
/*!40000 ALTER TABLE `members` ENABLE KEYS */;

#
# Structure for table "news"
#

DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `title` varchar(100) DEFAULT NULL COMMENT '标题',
  `nmemo` text COMMENT '内容',
  `naddtime` datetime DEFAULT NULL COMMENT '发布时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

#
# Data for table "news"
#

/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (4,'大学校园自动售货机系统上线了欢迎使用','<p style=\"text-indent:2em;\">\r\n\t大学校园自动售货机系统上线了欢迎使用大学校园自动售货机系统上线了欢迎使用大学校园自动售货机系统上线了欢迎使用大学校园自动售货机系统上线了欢迎使用大学校园自动售<span style=\"color:#E53333;\">货机系统上线了欢迎使用大学校园自动售货机系统上线了欢迎使用大学校园自动售货机系统上线了欢迎使用大学校园自动售货机系统上线了欢迎使用大学校园自动售货机系统上线了欢迎使用大学校园自动售货机系统上线了欢迎使用大学校园自动售货机系统上线了欢迎使用大学校园自动售货机系统上线了欢迎使用大学校园自动售货机系统上线了欢迎使用大学校园自动售货机系统上线了欢迎使用大学校园自动售货机系统上线了欢迎使用大学校园自动售货机系统上线了欢迎使用大学校园自动售货机系统上线了欢<img src=\"http://localhost:8080/VendingMachine/kindeditor/plugins/emoticons/images/13.gif\" border=\"0\" alt=\"\" /></span>\r\n</p>\r\n<p style=\"text-indent:2em;\">\r\n\t<span style=\"color:#E53333;\">迎使用大学校园自动售货机系统上线<img src=\"/VendingMachine/upload/image/20230417/20230417011441_227.png\" alt=\"\" width=\"210\" height=\"210\" title=\"\" align=\"left\" />了欢迎使用大学校园自动售货机系统上线了</span>欢迎使用大学校园自动售货机系统上线了欢迎使用大学校园自动售货机系统上线了欢迎使用大学校园自动售货机系统上线了欢迎使用大学校园自动售货机系统上线了欢迎使用大学校园自动售货机系统上线了欢迎使用大\r\n</p>\r\n<p style=\"text-indent:2em;\">\r\n\t学校园自动售货机系统上线了欢迎使用大学校园自动售货机系统上线了欢迎使用大学校园自动售货机系统上线了欢迎使用大学校园自动售货机系统上线了欢迎使用大学校园自动售货机系统上线了欢迎使用大学校园自动售货机系统上线了欢迎使用大学校园自动售货机系统上线了欢迎使用大学校园自动售货机系统上线了欢迎使用大学校园自动售货机系统上线了欢迎使用大学校园自动售货机系统上线了欢迎使用\r\n</p>','2023-04-17 00:11:59'),(5,'欢迎注册欢迎登录','<p style=\"text-indent:2em;\">\r\n\t欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册\r\n</p>\r\n<p style=\"text-indent:2em;\">\r\n\t欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录\r\n</p>\r\n<p style=\"text-indent:2em;\">\r\n\t欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录欢迎注册欢迎登录\r\n</p>','2023-04-17 00:12:12'),(6,'注册并登录后就可以购买商品了','<p style=\"text-indent:2em;\">\r\n\t注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买\r\n</p>\r\n<p style=\"text-indent:2em;\">\r\n\t商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并\r\n</p>\r\n<p style=\"text-indent:2em;\">\r\n\t登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了注册并登录后就可以购买商品了\r\n</p>','2023-04-17 00:12:22');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;

#
# Structure for table "orderdetail"
#

DROP TABLE IF EXISTS `orderdetail`;
CREATE TABLE `orderdetail` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `no` varchar(50) DEFAULT NULL COMMENT '订单编号',
  `gid` int(11) DEFAULT NULL COMMENT '商品ID',
  `price` double DEFAULT '0' COMMENT '单价',
  `quantity` int(11) DEFAULT NULL COMMENT '数量',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

#
# Data for table "orderdetail"
#

/*!40000 ALTER TABLE `orderdetail` DISABLE KEYS */;
INSERT INTO `orderdetail` VALUES (13,'230417005013229',5,3.5,3),(14,'230417005013229',9,15,1),(15,'230417011409186',9,15,3),(16,'230417011409186',8,4.5,1),(17,'230417011409186',4,3.5,2);
/*!40000 ALTER TABLE `orderdetail` ENABLE KEYS */;

#
# Structure for table "orderform"
#

DROP TABLE IF EXISTS `orderform`;
CREATE TABLE `orderform` (
  `no` varchar(50) NOT NULL COMMENT '订单编号',
  `lname` varchar(50) DEFAULT NULL COMMENT '账号',
  `omoney` double DEFAULT '0' COMMENT '订单金额',
  `otime` datetime DEFAULT NULL COMMENT '提交时间',
  `oflag` varchar(50) DEFAULT NULL COMMENT '订单状态',
  PRIMARY KEY (`no`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

#
# Data for table "orderform"
#

/*!40000 ALTER TABLE `orderform` DISABLE KEYS */;
INSERT INTO `orderform` VALUES ('230417005013229','byebye',25.5,'2023-04-17 00:50:13','已支付'),('230417011409186','bbcbbc',56.5,'2023-04-17 01:14:09','已支付');
/*!40000 ALTER TABLE `orderform` ENABLE KEYS */;

#
# Structure for table "shoppingcar"
#

DROP TABLE IF EXISTS `shoppingcar`;
CREATE TABLE `shoppingcar` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `lname` varchar(50) DEFAULT NULL COMMENT '用户名',
  `gid` int(11) DEFAULT NULL COMMENT '商品ID',
  `quantity` int(11) DEFAULT NULL COMMENT '数量',
  `price` double DEFAULT '0' COMMENT '单价',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

#
# Data for table "shoppingcar"
#

/*!40000 ALTER TABLE `shoppingcar` DISABLE KEYS */;
/*!40000 ALTER TABLE `shoppingcar` ENABLE KEYS */;
