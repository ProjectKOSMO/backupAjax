<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title></title>
	<script  type="text/javascript"  src="libs/jquery-1.9.1.min.js"> </script>
	<script>
	    
	</script>
</head>
<script>
$(function(){
	var param = {cate:'book', name:'java'}
	
	$.ajax({
		type :'post',
		url : '04_server.jsp',
		data : param,
		//dataType : 'json' -> json 라이브러리 다운 필요..!
		//이번에는 json 라이브러리 안쓰지만 스프링에서는 가능
		dataType: 'text', //기본값은 text
		success: function(data){
			var obj = {}
			obj = eval("("+data+")") //문자 타입을 객체 타입으로 바꿔주는 eval 함수 but 
			$('#cate').val(obj.first)
			// json 라이브러리 있으면 $('#cate').val(data.first) 이것만 있으면 됨.
		}
	})
})
</script>

<body>
서버로부터 넘겨받은 데이터<br/>
첫번째 데이터 : <input type="text" name="" id="cate"/><br/>
두번째 데이터 : <input type="text" name="" id="name"/><br/>
</body>
</html>


