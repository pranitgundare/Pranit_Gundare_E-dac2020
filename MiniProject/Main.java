package MiniProject;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Scanner;

class Main {

    public static void main(String[] args) {
        String pattern = "dd-MM-yyyy";
        Hostel h = new Hostel();
        List<Student> studentList = new ArrayList<>(); // Creating object of list Student
        List<College> collegeList = new ArrayList<>();
        Mess m = new Mess();

        h.setHostelName("WIT Hostel");
        h.setRoomCount(40);
        h.setStudentCount(40);

        Student s = new Student();
        s.setSname("Pranit Gundare");
        s.setRegNo("EDAC068");
        s.setPhNumber(8275601004L);
        s.setAddress("Gundare Niwas,Sammishra Colony,Udgir,Dist.Latur-413517");
        s.setBranch("Computer Science");
        s.setGuardianNumber(9100000000L);
        Mess mess1 = new Mess();
        mess1.setMessName("Jain Mess");
        mess1.setMessFee(2000);
        mess1.setJoiningDate("18/11/2020");
        s.setStudentMess(mess1);

        studentList.add(s);   // Adding student in the list.

        Student s1 = new Student();

        s1.setSname("Shrusti Patel");
        s1.setRegNo("EDAC098");
        s1.setPhNumber(7745077488L);
        s1.setAddress("Patel Mansion, Patel Colony, Gondiya-441601");
        s1.setBranch("Informtion and Technology");
        s1.setGuardianNumber(9527759209L);
        Mess mess2 = new Mess();
        mess2.setMessName("Jain Mess");
        mess2.setMessFee(2000);
        mess2.setJoiningDate("20/11/2020");
        s1.setStudentMess(mess2);

        studentList.add(s1);  // Adding student in the List

        collegeList.add(new College("1)ManoharBhai Institute Of Technology", "MEIT1122"));
        collegeList.add(new College("2)Sanjay Godawat Institute Of Technology", "SGI12345"));
        collegeList.add(new College("3)Walchand Institute Of Technology", "WIT1008"));

        System.out.println("•♦•♦○ Hostel Accommodation System ○•♦•♦");
        System.out.println(" ");
        while (true) {   
            System.out.println("---List Of Colleges---");
            for (College college : collegeList) {
                System.out.println(college.getName());
                System.out.println(college.getCollegeCode());
            }
            System.out.println(" ");
            System.out.println("Enter Your College Name:");
            Scanner sc = new Scanner(System.in);
            switch (sc.nextLine()) {
                case "Walchand Institute Of Technology":
                    System.out.println(" ");
                    System.out.println(" You are Eligible for the HOSTEL Admission");
                    System.out.println("Hostel Name: " + h.getHostelName());
                    System.out.println("Student Capacity:" + h.getStudentCount());
                    System.out.println("Room Capacity: " + h.getRoomCount());
                    System.out.println("Room Availability:" + (h.getRoomCount() - studentList.size()));

                    System.out.println("--- Current Student Details ---:");
                    for (Student student : studentList) {
                        System.out.println();
                        System.out.println("Student Name:- " + student.getSname());
                        System.out.println("Registration Number:- " + student.getRegNo());
                        System.out.println("Phone Number:- " + student.getPhNumber());
                        System.out.println("Address:- " + student.getAddress());
                        System.out.println("Branch:- " + student.getBranch());
                        System.out.println("Guardian Number:- " + student.getGuardianNumber());
                    }
                  
                    System.out.println("\n○○○○○○○○○○○○○○○○");
                    System.out.println("** Enter New Student Details **\n");
                    Student studentEntry = new Student();
                    System.out.println("Enter Student Name: ");
                    studentEntry.setSname(sc.nextLine());
                    System.out.println("Enter Registration Number:");
                    studentEntry.setRegNo(sc.nextLine());
                    System.out.println("Enter Phone Number:");
                    studentEntry.setPhNumber(sc.nextLong());
                    System.out.println("Enter Your Address:");
                    studentEntry.setAddress(sc.next());
                    System.out.println("Enter Your Branch:");
                    studentEntry.setBranch(sc.next());
                    System.out.println("Enter Your Guardian Phone Number:");
                    studentEntry.setGuardianNumber(sc.nextLong());
                    studentList.add(studentEntry);
                    System.out.println("---New Student Details---:");
                    System.out.println("Student Name:- " + studentEntry.getSname());
                    System.out.println("Registration Number:- " + studentEntry.getRegNo());
                    System.out.println("Phone Number:- " + studentEntry.getPhNumber());
                    System.out.println("Address:- " + studentEntry.getAddress());
                    System.out.println("Branch:- " + studentEntry.getBranch());
                    System.out.println("Guardian Number:- " + studentEntry.getGuardianNumber());

                    System.out.println("You have Allocated Room No: " + studentList.size());
                    System.out.println("Room Availability:" + (h.getRoomCount() - studentList.size()));
                    System.out.println(" ");
                    System.out.println("********* Hostel Mess Information ********* ");
                    System.out.println(" ");
                    System.out.println("We Have Mess Facility, Do you want To join?");
                    System.out.println(" Enter Your Interest :\n 1.Yes \n 2.No");
                    switch (sc.nextInt()) {
                        case 1:
                            Mess mess3 = new Mess();
                            mess3.setMessName("Jain Mess");
                            mess3.setMessFee(2000);
                            String dateInString = new SimpleDateFormat(pattern).format(new Date());
                            mess3.setJoiningDate(dateInString);
                            studentEntry.setStudentMess(mess3);
                            System.out.println("☻ Enjoy The Meal ☻");
                            System.out.println("Mess Name: " + mess3.getMessName());
                            System.out.println("Mess Fee: " + mess3.getMessFee());
                            System.out.println("Mess Joining Date: " + mess3.getJoiningDate());
                            break;
                        default:
                            System.out.println("○ You Can Join Outsider Mess ○");
                            break;
                    }
                    break;

                default:
                    System.out.println("You are not eligible for the Hostel Admission");

            }
            System.out.println(" ");
            System.out.println("☺☻♥♦♣♠•◘○☺☻♥♦♣♠•◘○");
            System.out.println("Do You Want to Add Another Student Data?\n 1.Yes \n 2.No");
            int choice = sc.nextInt();
            if (choice == 2) {
                break;
            }

        }
        System.out.println(" ");
        System.out.println(" ♥♥♥ Every Hostel Room Holds Millions Of Memories. ♥♥♥ ");
    }

}
