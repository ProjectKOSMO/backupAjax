package com.springbook.view.board;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import com.springbook.biz.board.BoardVO;
import com.springbook.biz.board.impl.BoardDAO;

public class GetBoardController implements Controller{

	@Override
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) {
	//1. 검색할 게시글 번호 추출
	String seq = request.getParameter("seq");
	//2. DB 연동처리
	BoardVO vo = new BoardVO();
	BoardDAO boardDAO = new BoardDAO();
	BoardVO board = boardDAO.getBoard(vo);
	
	//3. 검색결과와 화면 정보를 ModelAndView에 저장하여 리턴한다
	ModelAndView mav = new ModelAndView();
	mav.addObject("board", board);
	mav.setViewName("getBoard");
	return mav;
	}

}
