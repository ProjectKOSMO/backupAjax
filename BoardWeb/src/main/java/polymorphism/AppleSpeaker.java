package polymorphism;

public class AppleSpeaker implements Speaker {
	public AppleSpeaker() {
		System.out.println("���ý���Ŀ ��ü ����");
	}
	@Override
	public void volumeUp() {
		System.out.println("���ý���Ŀ �Ҹ� �ø���.");
		
	}

	@Override
	public void volumeDown() {
		System.out.println("���ý���Ŀ �Ҹ� ������.");
		
	}

}
