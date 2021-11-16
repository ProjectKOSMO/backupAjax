package com.springbook.biz.board;

import java.util.List;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.GenericXmlApplicationContext;

import com.springbook.biz.board.BoardService;

public class BoardServiceClient {
	public static void main(String[] args) {
		//spring �����̳ʱ���
		AbstractApplicationContext container = new GenericXmlApplicationContext("applicationContext.xml");
		
		//Spring �����̳ʷκ��� BoardServiceImpl ��ü�� Lookup�Ѵ�
		BoardService boardService = (BoardService) container.getBean("BoardService");
		
		BoardVO vo = new BoardVO();
		vo.setSeq(100);
		vo.setTitle("�ӽ�����");
		vo.setWriter("ȫ�浿");
		vo.setContent("�ӽ� ����....");
		//boardService.insertBoard(vo);
		
		List<BoardVO> boardList = boardService.getBoardList(vo);
		for(BoardVO board : boardList){
			System.out.println(board.toString());
		}
		
		container.close();
	}
}
