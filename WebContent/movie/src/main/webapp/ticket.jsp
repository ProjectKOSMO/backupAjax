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
	
	String sql = "select * from cinema where mgroup=1";
	
	Statement stmt = connection.createStatement();
	ResultSet rs = stmt.executeQuery(sql);	
	
	rtn_xml += "<customer>";

	while (rs.next()){		
		rtn_xml += "<person>";
	
		rtn_xml += "<mname>" + rs.getString("mname") +  "</mname>";
		rtn_xml += "<mprice>" + rs.getString("mprice") +  "</mprice>";
		rtn_xml += "</person>";		
	}	
	rtn_xml += "</customer>";
	rs.close();
	stmt.close();
	connection.close();

	

	
	
	out.write(rtn_xml);

%>