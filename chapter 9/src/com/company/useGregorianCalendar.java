package com.company;

import java.util.GregorianCalendar;

public class useGregorianCalendar {
    public static void main(String[] args) {
        GregorianCalendar date1 = new GregorianCalendar(2021, 03, 23);
        System.out.println(date1.get(GregorianCalendar.YEAR));
        System.out.println(date1.get(GregorianCalendar.MONTH));
        System.out.println(date1.get(GregorianCalendar.DAY_OF_MONTH));
        date1.setTimeInMillis(1234567898765L);
        System.out.println(date1.get(GregorianCalendar.YEAR));
        System.out.println(date1.get(GregorianCalendar.MONTH));
        System.out.println(date1.get(GregorianCalendar.DAY_OF_MONTH));
    }
}
