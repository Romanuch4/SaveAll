package com.company;

import java.util.Random;

public class useRandom {
    public static void main(String[] args) {
        Random rnd1 = new Random(1000);
        for (int i = 0; i < 50; i++) {
            System.out.println(rnd1.nextInt(100) + 1);
        }
    }
}
