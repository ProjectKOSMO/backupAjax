package polymorphism;

import org.springframework.stereotype.Component;


public class SonySpeaker implements Speaker {
	public SonySpeaker() {
		System.out.println("===>소니스피커 객체생성");
	}
	
	public void volumeUp() {
		System.out.println("소니스피커 ---소리 올린다");
	}
	public void volumeDown() {
		System.out.println("소니스피커---소리 내린다");
	}
}
