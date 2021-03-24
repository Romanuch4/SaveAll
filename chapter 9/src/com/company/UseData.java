package com.company;

import java.util.Date;

public class UseData {
    public static void main(String[] args) {
        Date date1 = new Date(10000);
        Date date2 = new Date(100000);
        Date date3 = new Date(1000000);
        System.out.println(date1.toString());
        System.out.println(date2.toString());
        System.out.println(date3.toString());
    }
}
