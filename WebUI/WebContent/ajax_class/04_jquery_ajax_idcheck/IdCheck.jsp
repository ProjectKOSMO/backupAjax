<%@ page contentType="text/xml; charset=utf-8" %>
<%@ page language="java" import="java.sql.*"%>

<%
String driver="oracle.jdbc.driver.OracleDriver";
String user="scott";
String pass="tiger";
String dbURL="jdbc:oracle:thin:@localhost:1521:xe";

	// (1) 드라이버를 메모리 로딩
	Class.forName(driver);
	// (2) 연결객체 얻어오기
	Connection connection=DriverManager.getConnection(dbURL,user,pass);
	
	// (3) SQL 만들기
	String sql = "select * from temp where name=?";
	//System.out.println(sql);
	// (4) 전송객체 얻어오기 (PreparedStatement)
	PreparedStatement ps = connection.prepareStatement(sql);
	ps.setString(1, request.getParameter("id"));
	// (5) 전송
	ResultSet rs = ps.executeQuery();		
	// (6) 결과 받아 처리
	String result="NO";
	if (rs.next()){		
		result = "YES";
	}
	// (7) 닫기
	ps.close();
	connection.close();
	out.print(result);
%>





