//제이쿼리 작업.

	
$(function(){
	var Today = new Date();
	$('#date_wrap > .year').text(Today.getFullYear())
	$('#date_wrap > .month').text(Today.getMonth()+1)
	$('#date_wrap > .date').text(Today.getDate())
	
	$('p > #keyword').focus(function(){
		$(this).css("background-position","0 -500px")
	})
	$('p > #keywotd').blur(function(){
		$(this).css("background-position","0 0")
	})
	
	$('#tabmenu > .tab_btn1').mouseenter(function(){
	var srcText = $(this).attr('src').replace('_over', "_out")
	$(this).attr('src',srcText);
	})
	
	$('#tabmenu > .tab_btn1').mouseleave(function(){
	var srcText2 = $(this).attr('src').replace('_over','_out')
	$(this).attr('src',srcText2);
	})
	
	$('#tabmenu > .tab_btn1').mouseenter(function(){
	var srcText3 = $(this).attr('src').replace('_over', "_out")
	$(this).attr('src',srcText3);
	})
	
	$('#tabmenu > .tab_btn1').mouseleave(function(){
	var srcText4 = $(this).attr('src').replace('_over','_out')
	$(this).attr('src',srcText4);
	})
	
	$('#tabmenu > .tab_btn1').mouseenter(function(){
	var srcText5 = $(this).attr('src').replace('_over', "_out")
	$(this).attr('src',srcText5);
	})
	
	$('#tabmenu > .tab_btn1').mouseleave(function(){
	var srcText6 = $(this).attr('src').replace('_over','_out')
	$(this).attr('src',srcText6);
	})
	
	
	
})
