/**
 * 
 */

$(function(){
	
	$('.accordion').each(function(){
		var allDt = $(this).find('dt')
		var allDd = $(this).find('dd')
	
	allDd.hide()
		//아예첫번째껏만 가져올때
		//$('.accordion dd:first').show()
	allDd.first().show() // 첫번째 요소 보여줄때
	// 변수명 let, const 써됨 
	
	$('dt').css({'cursor':'pointer'}); // 커서 손모양으로 바꾸기
	
	allDt.click(function(){ // 함수 클릭했을때 
		allDd.slideUp(); // 클릭하면 올라가서 없어지기.
		//$(this).next().slideDown(); //클릭하면 내려가서 나타나기.
		$(this).next().toggle(); //클릭할때마다 사라졌다 나타났다하기.
	});
	})
	
	
})