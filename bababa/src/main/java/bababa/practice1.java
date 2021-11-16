package bababa;

import java.util.Scanner;

import ch.qos.logback.core.net.SyslogOutputStream;

public class practice1 {

	public static void main(String[] args) {
		
		
		Scanner sc = new Scanner(System.in);
		System.out.println("1부터 100,000 사이의 값 입력");
		int num= sc.nextInt();
		
		int count = 0;
		for(int i = 1; i <= num; i++){
		if(num <= 100){
			if(i % 10 == 3 || i % 10 ==6 || i % 10 ==9){
				count++;
			}
		}else if(num <=1000){
			
		}
		
	}System.out.println(count);
	}
}
