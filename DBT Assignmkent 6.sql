create database assignment6;
use assignment6;

# 1.Write function that accepts a positive number from a user and displays its factorial on the screen.
delimiter $$
create function ques1(num int) returns int
begin
declare fact int default 1;
factorial : loop
if(num=0)
then 
return fact;
leave factorial;
end if;
set fact = fact*num;
set num = num-1;
end loop;
end$$

select ques1(4);

#2.	Write a function that accepts a positive number ‘n’ and displays whether that number is a Prime number or not.
delimiter $$
create function ques2(num int) returns varchar(20)
begin
declare count int default 2;
prime : loop
if(count > num)
then 
return "Prime Number";
leave prime;
elseif(num % count = 0 && num != count)
then
return "Not Prime";
leave prime;
else
set count = count + 1;
end if;
end loop;
end$$
select ques2(11);

#3.	Write a function to Convert an inputed number of inches into yards, feet, and inches. For example, 124 inches equals 3 yards, 1 foot, and 4 inches.
delimiter $$
create function que3( feet int(20)) returns varchar(200)
declare inch,yard,foot int; 
BEGIN 
set feet = inch / 12;
set yard=feet / 3;
set foot=feet MOD 3;
set inch=inch MOD 12;
return concat( yard' yards ',foot,' foot ',inch,' inches ');
end$$
-- return concat( round(val/36),' yards ',round(val/12),' foot ',val ,' inches ');


select que3(124);

#4.	Write a function to update salary of the employees of specified dept by 10%. Take dept no as parameter.
create table emp(empName varchar(20), salary varchar(20), deptNo int);
insert into emp values('Pranit',100000, 1);
insert into emp values('Payal',300000, 2);
insert into emp values('Prafulla',200000, 3);
insert into emp values('Pratima',50000, 4);
select * from emp;

delimiter $$
create function que4(dept int) returns varchar(20)
begin
update emp set salary=salary+(salary*0.10) where deptNo=dept;
return 'UPDATED';
end$$

SELECT que4(3);

/* 5.Create a function named USER_ANNUAL_COMP that has a parameter p_eno for passing on the values of  an employee number of the employee and p_comp for passing the compansation. In the function calculates and returns the annual compensation of the employee by using the following formula.
annual_compensation =  (p_sal+p_comm)*12
If the salary or commission value is NULL then zero should be substituted for it.  Give a call to USER_ANNUAL_COMP.
*/

delimiter $$
create function que5(p_eno int, p_comm int) returns int
begin
declare annual_compensation int;
set annual_compensation = (select salary from emp where deptNo=p_eno);
return (annual_compensation+p_comm)*12;
end$$ 
drop function que5;
select que5(4,10) as 'updated salary'; 

# 6.Create a procedure called USER_QUERY_EMP that accepts three parameters. Parameter p_myeno is of IN parameter mode which provides the empno value. The other two parameters p_myjob and p_mysal are of OUT mode. The procedure retrieves the salary and job of an employee with the provided employee number and assigns those to the two OUT parameters respectively. The procedure should raise the error if the empno does not exist in the EMP table by displaying an appropriate message
delimiter $$
create procedure que6(in p_myeno int, out  p_myjob varchar(20), out p_mysal int)
begin
set p_myjob=(select empName from emp where deptNo=p_myeno);
set p_mysal=(select salary from emp where deptNo=p_myeno);
end$$
call que6(2,@job,@salary);
select @job, @salary;

#7.	Create a procedure to print the inputted string in reverse order. If  inputted string is null display an appropriate message
delimiter $$
create procedure que7( str varchar(20))
begin
select reverse(str);
end$$

call que7("Boat");

#8.	Create a procedure named ‘tabledetails’ which gives all the details of a particular table stored in database.
delimiter $$
create procedure tabledetails()
begin
select * from emp;
end$$
call tabledetails();


