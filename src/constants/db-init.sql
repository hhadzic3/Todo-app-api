create database expressapp;
use expressapp;
/*use pufbjveg;*/

create table users(
id int auto_increment primary key,
email text not null,
password text not null,
createdAt datetime,
updatedAt datetime
);

insert into users values (123,"bbhasj@dasd.ba","basjhcbjhas");
/*
create table todos(
id int auto_increment primary key,
user_id int foreign key,
todo_text text not null,
completed boolean not null,
createdAt datetime,
updatedAt datetime
);*/