create database examdb;

use examdb;

create table Employee_Tb(
    id int PRIMARY KEY auto_increment,
    e_name varchar(100),
    email varchar(100),
    password varchar(100),
    emp_id int,
    dname varchar(100),
    doj varchar(100)
);

insert into Employee_Tb(e_name,email,password,emp_id,dname,doj) values('aditya','aditya@sunbeam.com','adi123',10,'training','10-05-2023');


insert into Employee_Tb(e_name,email,password,emp_id,dname,doj) values('aditya','aditya@sunbeam.com','adi123',10,'training','10-05-2023');


insert into Employee_Tb(e_name,email,password,emp_id,dname,doj) values('aditya','aditya@sunbeam.com','adi123',10,'training','10-05-2023');


insert into Employee_Tb(e_name,email,password,emp_id,dname,doj) values('aditya','aditya@sunbeam.com','adi123',10,'training','10-05-2023');


insert into Employee_Tb(e_name,email,password,emp_id,dname,doj) values('aditya','aditya@sunbeam.com','adi123',10,'training','10-05-2023');


























create database movietb;

use movietb;

create table movie(
    id int PRIMARY KEY auto_increment,
    name varchar(100)
);

insert into movie(name) values('movie1');
insert into movie(name) values('movie2');
insert into movie(name) values('movie3');
insert into movie(name) values('movie4');
