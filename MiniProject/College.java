package MiniProject;

class College extends Student
{
    private String name;
    private String CollegeCode;

    public College(String name, String CollegeCode) {
        this.name = name;
        this.CollegeCode = CollegeCode;
    }

    public String getName() {
        return name;
    }

    public String getCollegeCode() {
        return CollegeCode;
    }
}