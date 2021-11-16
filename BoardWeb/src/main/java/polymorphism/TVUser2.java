package polymorphism;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.GenericXmlApplicationContext;

public class TVUser2 {
 public static void main(String[] args) {
	 //spring 컨테이너를 구동한다.
	 AbstractApplicationContext factory = 
			 new GenericXmlApplicationContext("applicationContext.xml");
}
}
