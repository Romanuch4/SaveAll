package com.company;

import java.util.Arrays;

public class Location {
    public int row, column;
    public double maxValue;
    public static double[] locateLargest(double[][] a) {
        double maxElem = Double.NEGATIVE_INFINITY;
        for (int i = 1; i < a.length; i++) {
            for (int j = 1; j < a[0].length; j++) {
                if (a[i][j] >= a[i-1][j-1]) {
                    maxElem = a[i][j];
                }
            }
        }
        double[] position = new double[2];
        for (int i = 0; i < a.length; i++) {
            for (int j = 0; j < a[0].length; j++) {
                if (a[i][j] == maxElem) {
                    position[0] = i;
                    position[0] = j;
                }
            }
        }
        return position;
    }
}
