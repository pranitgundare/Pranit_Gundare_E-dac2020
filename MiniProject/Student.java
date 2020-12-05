package MiniProject;

import java.util.Scanner;

class Student {

    private String Sname;
    private String RegNo;
    private long PhNumber;
    private String Address;
    private String Branch;
    private long GuardianNumber;
    private Mess studentMess; // we have created member variable of mess class over here. to assign and to store into the each student data.

    public Mess getStudentMess() {
        return studentMess;
    }

    public void setStudentMess(Mess studentMess) {
        this.studentMess = studentMess;
    }
    
    public String getSname() {
        return Sname;
    }

    public void setSname(String Sname) {
        this.Sname = Sname;
    }

    public String getRegNo() {
        return RegNo;
    }

    public void setRegNo(String RegNo) {
        this.RegNo = RegNo;
    }

    public long getPhNumber() {
        return PhNumber;
    }

    public void setPhNumber(long PhNumber) {
        this.PhNumber = PhNumber;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String Address) {
        this.Address = Address;
    }

    public String getBranch() {
        return Branch;
    }

    public void setBranch(String Branch) {
        this.Branch = Branch;
    }

    public long getGuardianNumber() {
        return GuardianNumber;
    }

    public void setGuardianNumber(long GuardianNumber) {
        this.GuardianNumber = GuardianNumber;
    }

    
}
