$(document).ready(function(){
	count = function(type)  {
		  // 결과를 표시할 element
		  const resultElement = document.getElementById('result1');
		  console.log(resultElement);
		  // 현재 화면에 표시된 값
		  let number = resultElement.innerText;
		  
		  // 더하기/빼기
		  if(type === 'plus') {
		    number = parseInt(number) + 1;
		  }else if(type === 'minus')  {
			  if(number > 0){
				  number = parseInt(number) - 1;
			  }
		  }
		  
		  
		  // 결과 출력
		  resultElement.innerText = number;
		}
});