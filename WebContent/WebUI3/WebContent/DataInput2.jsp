<%@ page language="java" import="java.sql.*"%>
<%
String driver="oracle.jdbc.driver.OracleDriver";
String user="hr2";
String pass="hr2";
String dbURL="jdbc:oracle:thin:@localhost:1521:xe";

request.setCharacterEncoding("utf-8");
//String name  = request.getParameter("name");
String qantity_str = request.getParameter("qantity");
int qantity = Integer.parseInt(qantity_str);
String id = request.getParameter("id");
String name = "";
String poster_url = "";

	Class.forName(driver);
	Connection connection=DriverManager.getConnection(dbURL,user,pass);		

	
	 if(id.equals("btn_movie0")){
		name = "Parasite";
		poster_url = "./images/1.jpg";
	}else if(id.equals("btn_movie1")){
		name = "Avengers";
		poster_url = "./images/2.jpg";
	}else if(id.equals("btn_movie2")){
		name = "Spiderman";
		poster_url = "./images/3.jpg";
	}else if(id.equals("btn_movie3")){
		name = "Toy4";
		poster_url = "./images/4.jpg";
	}else if(id.equals("btn_movie4")){
		name = "Frozen";
		poster_url = "./images/5.jpg";
	}else if(id.equals("btn_movie5")){
		name = "Once";
		poster_url = "./images/6.jpg";
	} 
	 
	 
	
	String sql = "insert into ajax_movie(name, qantity) values(";
	sql += "'" + name + "','" + qantity + "')";
	 
	
	Statement stmt = connection.createStatement();
	int result = stmt.executeUpdate(sql);

	stmt.close();
	connection.close();
 	
	
	
	out.write(poster_url);
%>