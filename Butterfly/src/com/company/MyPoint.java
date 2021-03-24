package com.company;

public class MyPoint {
	private double x;
	private double y;
	private final double step = 0.6;
	
	public MyPoint() {
		this(0.0, 0.0);
	};
	
	public MyPoint(double x, double y) {
		this.x = x;
		this.y = y;
	};
	
	public double getX() {
		return x;
	}

	public double getY() {
		return y;
	}

	
	public double calcDistance(double x, double y) {
		double distance = Math.sqrt(Math.pow((this.x - x), 2) + Math.pow((this.y - y), 2));
		return distance;
	}

	public double calcDistance(MyPoint point) {
		double distance = Math.sqrt(Math.pow((this.x - point.getX()), 2) + Math.pow((this.y - point.getY()), 2));
		return distance;
	}
	
	public void move() {
		double randNumber = Math.random();
		if(randNumber < 0.25) {
			this.x+=this.step;
		} else if(randNumber >= 0.25 && randNumber < 0.5) {
			this.x-=this.step;
		} else if(randNumber >= 0.5 && randNumber < 0.75) {
			this.y+=this.step;
		} else if(randNumber >= 0.75 && randNumber < 1.0) {
			this.y-=this.step;
		} 
	}
}
