use library;
create table Issue1(Lib_Issue_Id nvarchar(10),Book_No nvarchar(6),Member_Id nvarchar(5),Issue_Date Date, Return_date Date null);
Insert into Issue1 values(7001,101,1,'2006/12/10',null);
Insert into Issue1 values(7002,102,2,'2006/12/25',null);
Insert into Issue1 values(7003,104,1,'2006/01/15',null);
Insert into Issue1 values(7004,101,1,'2006/07/06',null);
Insert into Issue1 values(7005,104,2,'2006/11/15',null);
Insert into Issue1 values(7006,101,3,'2006/02/18',null);
update Issue1 set Return_date = null;
  select * from Issue1;
  select Lib_Issue_Id, Book_No, Member_Id,date_format(Issue_Date,'%d-%b-%y') as Issue_Date, Return_date from Issue1;
 
 