-- DB가 없으면 생성
CREATE DATABASE IF NOT EXISTS travel_planner;

-- travel_planner DB 사용
USE travel_planner;

-- 사용할 테이블 생성
CREATE TABLE `User` (
	`id` int auto_increment primary key,
	`login_id` varchar(50) NOT NULL,
	`password` varchar(50) NOT NULL,
	`nickname` varchar(50) NOT NULL
);

CREATE TABLE `Plan` (
	`id` int auto_increment primary key,
	`title` varchar(255)	NOT NULL,
	`intro` varchar(255)	NULL,
	`image` varchar(255)	NULL,
	`user_id` int NOT NULL,
	FOREIGN KEY (user_id) REFERENCES User(id)
);

CREATE TABLE `Place` (
	`id`	int auto_increment primary key,
	`name` varchar(255) NOT NULL,
	`addr`	varchar(255)	NOT NULL
);

CREATE TABLE `Path` (
	`id` int auto_increment primary key,
	`path_order` int NOT NULL,
	`plan_id` int NOT NULL,
	`place_id` int NOT NULL,
	FOREIGN KEY (plan_id) REFERENCES Plan(id),
	FOREIGN KEY (place_id) REFERENCES Place(id)
);

CREATE TABLE `Theme` (
	`id` int auto_increment primary key,
	`content` varchar(50)	NOT NULL,
	`plan_id` int NOT NULL,
	FOREIGN KEY (plan_id) REFERENCES Plan(id)
);

-- 샘플 데이터 삽입
INSERT INTO User (login_id, password, nickname)
VALUES
    ('sohee123', 'qqww123', 'sohee'),
    ('sohee1122', 'qqww123', 'sohee2');

