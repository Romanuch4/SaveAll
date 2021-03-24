package com.company;

public class MyRectangle2D {
	private double x, y;
	private double width, height;
	
	public MyRectangle2D() {
		this(0.0, 0.0, 1, 1);
	}
	
	public MyRectangle2D(double x, double y, double width, double height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	
	public double getX() {
		return x;
	}

	public void setX(double x) {
		this.x = x;
	}

	public double getY() {
		return y;
	}

	public void setY(double y) {
		this.y = y;
	}

	public double getWidth() {
		return width;
	}

	public void setWidth(double width) {
		this.width = width;
	}

	public double getHeight() {
		return height;
	}

	public void setHeight(double height) {
		this.height = height;
	}
	
	public boolean contains(double x0, double y0) {
		double dx = Math.abs(x - x0);
		double dy = Math.abs(y - y0);
		if(dx <=width / 2 && dy <=height / 2) {
			return true;
		} else return false;
	}

}
