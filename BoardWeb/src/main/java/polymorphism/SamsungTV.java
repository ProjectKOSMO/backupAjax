package polymorphism;

public class SamsungTV implements TV{
	private Speaker speaker;
	private int price;
	
	public SamsungTV(){
		System.out.println("===>SamsungTV ��ü ����");
	}
	
	public void setSpeaker(Speaker speaker) {
		System.out.println("setSpeakerȣ��");
		this.speaker = speaker;
	}

	public void setPrice(int price) {
		System.out.println("setPrice ȣ��");
		this.price = price;
	}

	public void powerOn() {
		System.out.println("�Ｚtv---���� �Ҵ�.(����: " + price +")");
	}
	
	public void powerOff() {
		System.out.println("�Ｚtv---���� ����");
	}
	public void volumeUp() {
		speaker.volumeUp();
	}
	public void volumeDown() {
		speaker.volumeDown();
	}
}
