use assignment3;
create table employee( empid int, empName varchar(20), deptId int, salary int, manager int, constraint employee_deptId_fk foreign key(deptId) references department(deptId));
create table department(deptId int primary key, deptName varchar(20));

insert into department values(1, 'Finance');
insert into department values(2, 'Training');
insert into department values(3, 'Marketing');

insert into employee values(1,'Arun',1,	8000,4);
insert into employee values(2,'Kiran',1,7000,1);
insert into employee values(3,'Scott',1,3000,1);
insert into employee values(4,'Max', 2, 9000, null);
insert into employee values(5,'Jack',2, 8000,4);
insert into employee values(6,'King',null,6000,1);

select * from employee order by empName;  #used for ascending.
select * from employee order by empName desc; #used for descending.

# select all data and sum of salary from employee and group according to deptid.
select * from department;
select *, sum(salary) from employee group by deptId;

# select all data and sum of salary from employee and group according to deptid.
select deptId,sum(salary) from employee group by deptId having sum(salary) > 17000;

#select deptid and sum of salary where sum of salary is greater than 18000 and grup by deptid. 
select deptId,sum(salary) from employee group by deptId having sum(salary) > 18000;

#select deptid and sum of salary where sum of salary is less than 20000 and grup by deptid. 
select deptId,sum(salary) from employee group by deptId having sum(salary) < 20000;


