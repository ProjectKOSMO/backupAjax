package polymorphism;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.GenericXmlApplicationContext;

public class TVUser {
 public static void main(String[] args) {

	 //1. 스프링컨테이너 구동
	 AbstractApplicationContext factoryContext = 
			 new GenericXmlApplicationContext("applicationContext.xml");
	
	 //2. 스프링컨테이너로부터 필요한 객체를 요청(Look up)
	 TV tv = (TV)factoryContext.getBean("happy");
	 tv.powerOn();
	tv.powerOff();
	tv.volumeUp();
	tv.volumeDown();
	
	//3.스프링컨테이너 종료
	factoryContext.close();
	
}
}
