package com.company;

public class TestApp {
    public static void main(String[] args) {
        Student s1 = new Student("Ivan Petrov");
        Student s2 = new Student("Kamila ES");
        s2.setAddress("Kiev");
        //System.out.println(s1.toString());
        //System.out.println(s2.toString());

        Cource cs001 = new Cource("Appliend Java programming");
        Cource cs002 = new Cource("Applied algorithms and data structuews");
        Cource cs003 = new Cource("Math");

        s1.addCourse(cs001);
        s1.addCourse(cs002);
        s1.addCourse(cs003);

        cs001.addStudent(s1);
        cs002.addStudent(s1);
        cs003.addStudent(s1);
        //s1.displayListCourses();
        s2.addCourse(cs001);
        Teacher t1 = new Teacher("Sergey Katkov");
        cs001.addTeacher(t1);
        cs001.addStudent(s2);

        cs001.displayListStud();
    }
}
