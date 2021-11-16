package polymorphism;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component("happy")

public class LgTV implements TV{
	@Autowired
	private Speaker speaker;
	
	public LgTV() {
		System.out.println("~~LgTV ��ü ����");
	}
	
	public void powerOn() {
		System.out.println("����tv---���� �Ҵ�");
	}
	public void powerOff() {
		System.out.println("����tv---���� ����");
	}
	public void volumeUp() {
		speaker.volumeUp();
	}
	public void volumeDown() {
	speaker.volumeDown();
	}
	
}

