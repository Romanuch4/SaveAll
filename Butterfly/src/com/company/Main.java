package com.company;

public class Main {
	public static void main(String[] args) {
		//MyPoint point1 = new MyPoint();
		//System.out.println(point1.getX());
		//System.out.println(point1.getY());
		
		//MyPoint point2 = new MyPoint(1, 1);
		//System.out.println(point2.getX());
		//System.out.println(point2.getY());
		//System.out.println(point2.calcDistance(3, 4));
		//System.out.println(point2.calcDistance(point1));
		MyPoint[] arr = new MyPoint[100];
		
		for(int i = 0; i < arr.length; i++) {
			MyPoint p = new MyPoint(Math.random()* 80 + 10, Math.random()* 80 + 10);
			arr[i] = p;
		}
		
		StdDraw.setXscale(0, 100);
		StdDraw.setYscale(0, 100);
		StdDraw.setPenRadius(0.01);
		StdDraw.setPenColor(255, 0, 0);
		
		MyRectangle2D button = new MyRectangle2D(10, 10, 10, 6);
		
		while(true) {
			StdDraw.clear();
			
			StdDraw.filledRectangle(button.getX(), button.getY(), button.getWidth() / 2, button.getHeight() / 2);
			
			if(StdDraw.isMousePressed()) {
				double x = StdDraw.mouseX();
				double y = StdDraw.mouseY();
				if(button.contains(x, y)) {
					System.out.println("qwerty");
				} else {
					//adding new MyPoint obj to array
					
				}
			} 
			
			for(int i = 0; i < arr.length; i++) {
				StdDraw.point(arr[i].getX(), arr[i].getY());
				//StdDraw.pause(40);
				arr[i].move();
			}
		}
	}
}
