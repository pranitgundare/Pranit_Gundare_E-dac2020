use library;
create table Books1(Book_No int(6), Book_Name VarChar(30), Author_name Varchar(30), Cost int(7), Category Char(10));
Insert into Books1 values(101, 'Let us C', 'Denis Ritchie', 450, 'System');
Insert into Books1 values(102, 'Oracle – Complete Ref', ' Loni', 550, 'Database');
Insert into Books1 values(103, 'Mastering SQL', 'Loni', 250, 'Database');
Insert into Books1 values(104, 'PL SQL-Ref', 'ScottUrman', 450, 'Database');
select * from Books1;	
UPDATE Books1 set Cost=300 WHERE Book_No=103;
select * from Books1;
