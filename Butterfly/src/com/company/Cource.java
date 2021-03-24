package com.company;

public class Cource {
    private String name;
    private Student[] list; //30
    private int numOfStudents;
    private Teacher teacher;
    public Cource(String name) {
        this.name = name;
        this.list= new Student[30];
        this.numOfStudents = 0;
        teacher = new Teacher("no teacher");
    }

    public void addStudent(Student s) {
        this.list[numOfStudents] = s;
        ++this.numOfStudents;
    }

    public String toString() {
        return "Course \"" + name + "\"," + teacher + teacher.toString();
    }

    public void displayListStud() {
        System.out.println("On cource " + name + " enrolled list of students: ");
        for (int i = 0; i < numOfStudents; i++) {
            System.out.println(list[i].toString());
        }
    }

    public void addTeacher( Teacher teacher) {
        this.teacher = teacher;
    }
}
