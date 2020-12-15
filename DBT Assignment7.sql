create database Assignment7;
use Assignment7;
show tables;
create table Ord_master(Ord_no int,Cust_cd  char(10),Status char(10));
insert into Ord_master values (1,'C1','p'); 

create table Ord_dtl( Ord_no int,Prod_cd char(10),Qty int);
insert into Ord_dtl values(1,'p1',100),(1,'p2',200);

create table  Prod_master(Prod_cd char(10),Prod_name varchar(20), Qty_in_stock  int,Booked_qty int);
insert into Prod_master values ( 'P1','Floppies',10000,1000);
insert into Prod_master values ( 'P2','Printers ',5000 ,600);
insert into Prod_master values ( 'P3','Modems ',3000,200);
-- ////////////////////////////////////////////////////tables created//////////////////////////////////////

-- //1. Write a Before Insert trigger on Ord_dtl. Anytime a row is inserted in Ord_dtl, the
-- ///Booked_qty in Prod_master should be increased accordingly.

delimiter $$
create trigger t1 before insert on Ord_dtl
for each row
begin
update  Prod_master set Booked_qty=Booked_qty + new.Qty where Prod_cd =new.Prod_cd;
end $$
insert into Ord_dtl values(1,'p3',300);
select * from Prod_master;
-- ///////////////////////////////////////////////////////////////////////////////////////////////////////

-- //2. Write a Before Delete trigger on Ord_dtl. Anytime a row is deleted from Ord_dtl, the
-- //Booked_qty in Prod_mastershould be decreased accordingly.

delimiter $$
create trigger t2  before delete on Ord_dtl
for each row
begin
update Prod_master set Booked_qty=Booked_qty - old.Qty where Prod_cd =old.Prod_cd;
end $$
delete from Ord_dtl where Prod_cd ='p3';
-- ////////////////////////////////////////////////////////////////////////////////////////////////////////

-- 3. write A trigger to update the total salary of a department in dept_sal  table  when an employee is added or removed from  emp table .

create table dept(dept_no int,salary int);
insert into dept values(1,10000),(2,20000);
select * from dept;
create table employ(emp_name varchar(30),designation varchar(20),salary int,dept_no int);

delimiter $$
create trigger t3 after insert on employ
for each row
begin
update dept set salary=salary + new.salary where dept_no=new.dept_no;
end $$
insert into employ values('prafulla','manager',1000,1);
insert into employ values('ambani','worker',2000,2);

delimiter $$
create trigger t5 before delete on employ
for each row
begin
update dept set salary=salary-old.salary where dept_no=old.dept_no;
end $$
drop trigger t5;
delete from employ where dept_no=1;