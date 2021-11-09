<%@ page contentType="text/xml; charset=utf-8" %>
<%@ page language="java" import="java.sql.*"%>

<%
String driver="oracle.jdbc.driver.OracleDriver";
String user="scott";
String pass="tiger";
String dbURL="jdbc:oracle:thin:@localhost:1521:xe";


	Class.forName(driver);
	Connection connection=DriverManager.getConnection(dbURL,user,pass);
	
	
	String dt  = "drop table cinema";
	String sql = "create table cinema(mgroup number(4),mname varchar(20),mprice number(8))";
	String commit  = "commit";
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
	Statement stmt1 = connection.createStatement();
	Statement stmt2= connection.createStatement();
	Statement stmt3 = connection.createStatement();
	Statement stmt4 = connection.createStatement();
	
	ResultSet rs = stmt.executeQuery(dt);	
	ResultSet rs1 = stmt1.executeQuery(sql);	
	ResultSet rs2= stmt2.executeQuery(commit);	
	ResultSet rs3 = stmt3.executeQuery(it);
	ResultSet rs4 = stmt4.executeQuery(commit2);	
	
	
	rs.close();
	stmt.close();
	connection.close();

	

	

%>