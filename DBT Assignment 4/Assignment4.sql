use assignment3;
create table employee1 as select * from employee;
select * from employee1;
create table department1 as select * from department;
select * from department1;
select * from employee1;
alter table department1 add primary key(deptId);
alter table employee1 add constraint fk foreign key (deptId) references department(deptId);

# Select dept_name and emp_name where dept_id is same.
select deptName,empname from department1,employee1 where employee1.deptId = department1.deptId;

#select all from both tables where dept_id is same.
select * from department1, employee1 where department1.deptId = employee1.deptId;

#select dept_id and sum of salary group it by dept_id.
select deptId,sum(salary) from employee1 group by deptId;

#select dept_name and emp_name apply right outer join and left outer join.
select deptName, empName from employee1 left outer join department1 on employee1.deptId = department1.deptId;
select deptName, empName from employee1 right outer join department1 on employee1.deptId = department1.deptId;

#select emp_name with their respective manager names.
select empName, Manager from employee1;

#select epm_name with their respective department names.
select empName,deptName from employee1, department1 where employee1.deptId = department1.deptId;

create table emp1(empNo int, empName varchar(20));
create table emp2(empNo int, empName varchar(20));

insert into emp1 values(1,'A');
insert into emp1 values(2,'B');
insert into emp1 values(3,'c');

insert into emp2 values(1,'A');
insert into emp2 values(2,'B');
insert into emp2 values(4,'D');
insert into emp2 values(5,'E');

#select same data from both table.
-- select * from emp1  select * from emp2;

-- ************subQuery*************
#select employee having  same salary as 'Arun'.
select * from employee1 where salary=(select salary from employee1 where  empName='Arun');

#select employee belonging to same dept as 'jack'.
select * from employee1 where deptId=(select deptId from employee1 where  empName='jack');

#select name of employee havin lowest salary.
select empName from employee1 where salary = (select min(salary) from employee1);

#update salary =15000 of employees belonging to same dept as 'Max'.
update employee1 set salary = 15000 where deptId = (select deptId from department1 where deptId = 2); 
select * from employee1 ;






