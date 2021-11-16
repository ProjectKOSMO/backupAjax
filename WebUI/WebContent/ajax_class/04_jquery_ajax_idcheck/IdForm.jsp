<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title> 아이디 중복 검사 </title>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

<script type = "text/javascript">
$(function(){  // DOM ready
	$('#id_check').click(function(){
	//$('.userinput').keyup(function(){ <<이거는 글자 쓸때 실시간으로 판단. 
		$.ajax({
			type:'get',
			data: {id : $('.userinput').val() },
			url : 'IdCheck.jsp',
			dataType : 'text',
			success : function(data){
				if( data.trim() == 'YES'){
					$('#idmessage').text('이미 사용중인 아이디가 있습니다.');
					$('#idmessage').show()
				}else{
					$('#idmessage').text('사용가능한 아이디가 입니다.');
					$('#idmessage').show()
				}
			}
		})
	});
})

</script>

</head>
<body>

<input name="id" type="text" class="userinput" size="15" />
<button type="button" id="id_check">중복체크</button><br/><br/>
<div id="idmessage" style="display:none;"></div>

</body>
</html>