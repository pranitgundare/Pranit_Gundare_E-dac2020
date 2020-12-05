package MiniProject;

import java.util.List;

class Hostel {

    private int StudentCount;
    private String HostelName;
    private int RoomCount;
   
    private List<Student> StudentList;

    public List<Student> getStudentList() {
        return StudentList;
    }

    public void setStudentList(List<Student> StudentList) {
        this.StudentList = StudentList;
    }

    public int getStudentCount() {
        return StudentCount;
    }

    public void setStudentCount(int StudentCount) {
        this.StudentCount = StudentCount;
    }

    public String getHostelName() {
        return HostelName;
    }

    public void setHostelName(String HostelName) {
        this.HostelName = HostelName;
    }

    public int getRoomCount() {
        return RoomCount;
    }

    public void setRoomCount(int RoomCount) {
        this.RoomCount = RoomCount;
    }

}
