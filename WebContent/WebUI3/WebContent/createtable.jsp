<%@page contentType="text/xml; charset=utf-8" %>
<%@ page language="java" import="java.sql.*"%>

<%
String driver="oracle.jdbc.driver.OracleDriver";
String user="scott";
String pass="tiger";
String dbURL="jdbc:oracle:thin:@localhost:1521:xe";



String rtn_xml="";


	Class.forName(driver);
	Connection connection=DriverManager.getConnection(dbURL,user,pass);
	
	
	String dt  = "drop table cinema";
	String sql = "create table cinema(mgroup number(4),mname varchar(20),mprice number(8))";
	String it = "INSERT ALL	INTO cinema (mgroup, mname, mprice) VALUES (1, '극한직업',14000)"
			+ "INTO cinema (mgroup, mname, mprice) VALUES (1, '소울',18000)"
			+ "INTO cinema (mgroup, mname, mprice) VALUES (1, '알라딘',18000)"
			+	"INTO cinema (mgroup, mname, mprice) VALUES (1, '주토피아',18000)"
			+	"INTO cinema (mgroup, mname, mprice) VALUES (1, '부산행',13000)"
			+	"INTO cinema (mgroup, mname, mprice) VALUES (1, '범죄도시',12000)"
			+	"INTO cinema (mgroup, mname, mprice) VALUES (2, '오리지날 팝콘',7000)"
			+	"INTO cinema (mgroup, mname, mprice) VALUES (2, '카라멜팝콘',5000)"
			+	"INTO cinema (mgroup, mname, mprice) VALUES (2, '버터오징어',4000)"
			+	"INTO cinema (mgroup, mname, mprice) VALUES (2, '핫도그',3000)"
			+	"INTO cinema (mgroup, mname, mprice) VALUES (2, '나쵸',4000)"
			+	"INTO cinema (mgroup, mname, mprice) VALUES (2, '땅콩',3000)"
			+	"INTO cinema (mgroup, mname, mprice) VALUES (2, '와플',3000)"
			+	"INTO cinema (mgroup, mname, mprice) VALUES (2, '떡볶이',3000)"
			+	"SELECT * FROM DUAL";
	String commit2  = "commit";
	
	
	
	Statement stmt = connection.createStatement();
	ResultSet rs0 = stmt.executeQuery(dt);	
	rs0.close(); 

	ResultSet rs = stmt.executeQuery(sql);	
	rs.close(); 
	ResultSet rs1 = stmt.executeQuery(it);
	rs1.close(); 
	ResultSet rs2 = stmt.executeQuery(commit2);
	rs2.close(); 
	
	stmt.close();
	connection.close();

	

	

%>