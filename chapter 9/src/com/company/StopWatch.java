package com.company;

import java.util.Date;

public class StopWatch {
    private double startTime;
    private double endTime;
    public StopWatch() {
        this.startTime = new Date().getTime();
    }
    public void start() {
        this.startTime = new Date().getTime();
    }

    public void stop() {
        this.endTime = new Date().getTime();
    }

    public double getElapsedTime() {
        return this.endTime - this.startTime;
    }

    public static void main(String[] args) {
        StopWatch timer1 = new StopWatch();
        int[] numbersArr = new int[100000];
        timer1.start();
        sortAscending(numbersArr);
        timer1.stop();
        System.out.println(timer1.getElapsedTime());
    }

    public static void sortAscending(final int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            int minElementIndex = i;
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[minElementIndex] > arr[j]) {
                    minElementIndex = j;
                }
            }

            if (minElementIndex != i) {
                int temp = arr[i];
                arr[i] = arr[minElementIndex];
                arr[minElementIndex] = temp;
            }
        }
    }
}
