<%@page contentType="text/xml; charset=utf-8" %>
<%@ page language="java" import="java.sql.*"%>

<%
String driver="oracle.jdbc.driver.OracleDriver";
String user="scott";
String pass="tiger";
String dbURL="jdbc:oracle:thin:@localhost:1521:xe";



String rtn_xml="";
	//1. 가져오기 ㅋㅋ
	Class.forName(driver);
	//2. 통로 연결
	Connection connection=DriverManager.getConnection(dbURL,user,pass);
	
	String sql = "select * from ajax_temp";
	//3. 물음표 없어서 statement씀
	Statement stmt = connection.createStatement();
	//4.                select 라 그냥 Query 씀 
	ResultSet rs = stmt.executeQuery(sql);	
	
	rtn_xml += "<customer>";

	while (rs.next()){		
		rtn_xml += "<person>";
		rtn_xml += "<name>" + rs.getString("name") + " </name>";
		rtn_xml += "<age>" + rs.getString("age") +  "</age>";
		rtn_xml += "<tel>" + rs.getString("tel") +  "</tel>";
		rtn_xml += "<addr>" + rs.getString("addr") +  "</addr>";
		rtn_xml += "</person>";		
	}	
	rtn_xml += "</customer>";
	rs.close();
	stmt.close();
	connection.close();

	

	//System.out.println(rtn_xml);
	
	out.write(rtn_xml); // 이게 전송되는거임 ㅋㅋ

%>