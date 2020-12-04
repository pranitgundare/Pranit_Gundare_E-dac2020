use library;
create table Member(Member_Id nvarchar(5) primary key, Member_Name varchar(30), Member_address Varchar(50), Acc_Open_Date Date, Membership_type Varchar(20), Penalty_Amount nvarchar(7));
Insert into Member values(1,'Richa Sharma','Pune','05-12-05','Lifetime');
Insert into Member values(3,'Garima Sen','Pune',curdate(),'Annual');
select * from Member;
select Member_Id, Member_Name, Member_address,date_format(Acc_Open_Date,'%d-%b-%y') as Acc_Open_Date, Membership_type, Penalty_Amount from Member;
alter table Member drop column Penalty_Amount;
select Member_Id, Member_Name, Member_address,date_format(Acc_Open_Date,'%d-%b-%y') as Acc_Open_Date, Membership_type from Member;

