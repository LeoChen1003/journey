#用户表
create table user(
    id INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(50),
    userName  VARCHAR(50),
    upwd VARCHAR(32),
    phone VARCHAR(32),
    cardID VARCHAR(32),
    seat VARCHAR(32),
    sex VARCHAR(4)
);
INSERT INTO user VALUES(null,"xiaozhan","肖战","xz123456","13562542822","362334199110052361","北京朝阳区","男");

#管理员信息表
create table adminInfo(
    id INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(50),
    userName  VARCHAR(50),
    upwd VARCHAR(32),
    phone VARCHAR(32),
    sex VARCHAR(4)
);
INSERT INTO adminInfo VALUES(null,"kathryn","程云敏","cym666666","13767367323","女");

#景点信息表
create table spotInfo(
    id INT PRIMARY KEY AUTO_INCREMENT,
    sName VARCHAR(50),
    img VARCHAR(50),
    details VARCHAR(128)
);

#酒店信息表
create table hotelInfo(
    id INT PRIMARY KEY AUTO_INCREMENT,
    hName VARCHAR(20),
    price VARCHAR(20),
    hAddress VARCHAR(50)
)