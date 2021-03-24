package com.company;

public class Fan {
    private final int SLOW = 1;

    public int getSLOW() {
        return SLOW;
    }

    public int getMEDIUM() {
        return MEDIUM;
    }

    public int getFAST() {
        return FAST;
    }

    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
    }

    public boolean isOn() {
        return on;
    }

    public void setOn(boolean on) {
        this.on = on;
    }

    public double getRadius() {
        return radius;
    }

    public void setRadius(double radius) {
        this.radius = radius;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    private final int MEDIUM = 2;
    private final int FAST = 3;
    private int speed;
    private boolean on;
    private double radius;
    private String color;

    public Fan() {
        this.speed = this.SLOW;
        this.on = false;
        this.radius = 5;
        this.color = "blue";
    }

    public String toString() {
        if (this.on) {
             System.out.println("speed: " + this.speed + "\n" + "radius: " + this.radius + "\n" + "color:" + this.color);
        } else System.out.println("fan is off" + "radius: " + this.radius + "\n" + "color:" + this.color);
        return null;
    }
}
