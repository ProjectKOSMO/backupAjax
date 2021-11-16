<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<script  type="text/javascript"  src="libs/jquery-1.9.1.min.js"> </script>
<script type="text/javascript">
$(function(){
	var param = {cate:'book', name:'kim'}
	/*$.ajax({
		type : 'post', //파일 업로드할때는 무조건  post 
		data : param,
		url : '02_server.jsp',
		success : parseData,
		error : function(err){
			alert('에러발생')
			console.log(err)
		}
	})*/
	$.post('02_server.jsp',param, parseData) // 축약형(이런게 있구나~ 이정도)
	function parseData(data){
		var aryData = data.split('|')
		for(var i = 0; i<aryData.length; i++ ){
			var keyValue = aryData[i].split('=');
			//alert(keyValue[0]+":"+keyValue[1])
			if(keyValue[0].trim() == 'cate'){
				$('#cate').val(keyValue[1])
			}
			if(keyValue[0].trim() == 'name'){
				$('#name').val(keyValue[1])
			}
		}
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


