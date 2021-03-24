package com.company;
// Class work at 24-03-2021
// CS-12
// Krentovskyi Roman
public class Student {
    private String name;
    private String address;
    private Cource[] cources;
    private int numOfCourses;
    public Student(String name) {
        this.name = name;
        this.address = "no address";
        cources = new Cource[100];
        this.numOfCourses = 0;
    }
    public void setAddress(String address) {
        this.address = address;
    }

    public String toString() {
        return name + " lives at " + "\"" +  address + "\"";
    }

    public void addCourse(Cource c) {
        this.cources[this.numOfCourses] = c;
        ++this.numOfCourses;
    }

    public void displayListCourses() {
        System.out.println("Student " + name + " enrolled list of courses: ");
        for (int i = 0; i < this.numOfCourses; i++) {
            System.out.println(cources[i].toString());
        }
    }

}
