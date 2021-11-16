package polymorphism;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.GenericXmlApplicationContext;

public class TVUser {
 public static void main(String[] args) {

	 //1. �����������̳� ����
	 AbstractApplicationContext factoryContext = 
			 new GenericXmlApplicationContext("applicationContext.xml");
	
	 //2. �����������̳ʷκ��� �ʿ��� ��ü�� ��û(Look up)
	 TV tv = (TV)factoryContext.getBean("happy");
	 tv.powerOn();
	tv.powerOff();
	tv.volumeUp();
	tv.volumeDown();
	
	//3.�����������̳� ����
	factoryContext.close();
	
}
}
