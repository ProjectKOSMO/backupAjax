<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title></title>
	<script  type="text/javascript"  src="libs/jquery-1.9.1.min.js"> </script>

<script type="text/javascript">

$(function(){
	var param = {cate:'book', name:'kim'}
	$.ajax({
		type: 'get',
		data: param, // data 의 cate = 'book', name = 'kim'
		url:"03_server.jsp", // 이 서버에보내고서 다시 가져옴 
		dataType: 'xml', // 응답데이터 종류 : html, xml, json,....
		success: parseData //성공했을때 이 함수를 가져옴 
	})
	function parseData(data){
		//alert(data)
		$('#cate').val($(data).find('first').text())
	}
})

</script>

</head>

<body>
서버로부터 넘겨받은 데이터<br/>
첫번째 데이터 : <input type="text" name="" id="cate"/><br/>
두번째 데이터 : <input type="text" name="" id="name"/><br/>
</body>
</html>


