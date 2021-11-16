/**
 * 
 */

$(function(){
	
	//$('#hideButton').click(function(){
		//$('#intro').slideUp('#intro')
	//})
	//$('#showButton').click(function(){
	//	$('#intro').slideDown('#intro')
	//})
	//$('#toggleButton').click(function(){
	//	$('#intro').toggle('#intro')
	//})
	// '감추기' 버튼 클릭시 - 위의 그림이 안보이게 
	// '보이기' 버튼 클릭시 - 위 그림 보이게
	// '감추기/보이기' 버튼 클릭시 토글처럼 보이고 사라지고 toggle
	
	// hide() / show() 
	// slideUp() / slide Down()
	// fadeIn() / fadeOut()
// 2번째 방법. 
	//'감추기' 버튼 클릭시 - 위 그림 안 보이게
	//$('#hideButton').click(function(){
		//$('p > img').hide()
	//})
	// '보이기' 버튼 클릭시 - 위 그림 보이게
	//$('#showButton').click(function(){
		//$('p > img').show()
	//})
		
	// 테이블구조에서 짝수번째 행에 table_striping 클래스 적용
	// 테이블에 마우스올라가면 td_mouseover 클래스 적용.
	
	$("#celebs tr:odd").addClass('table_striping');
	//선택자를 잘 찾아야함 !!
	//$('#celebs > table > tbody > tr:odd').addClass('table_striping')
	
	var h = $('.data tr');
	h.hover(function(){
		h.addClass('td_mouseover');
	}, function(){
		h.removeClass('td_mouseover');
	})
	// 다른 방법! 
	//$('.data tr').hover(function(){
	//	$(this).addClass('td_mouseover');
	//},function(){
	//	$(this).removeClass('td_mouseover');
	//});

	
		
})