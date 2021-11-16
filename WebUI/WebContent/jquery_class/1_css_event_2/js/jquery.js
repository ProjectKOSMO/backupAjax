/**
 * 
 */

$(function(){
	
	$('.rollover > img').mouseenter(function(){
		//var srcText = $(this).attr('src') 	// "imgs/menu02_off.png"
		//var srcText2 = srcText.replace('_off','_on') // "imgs/menu02_on.png"
		//$(this).attr('src',srcText2);
		var srcText2 = $(this).attr('src').replace('_off','_on')
		$(this).attr('src',srcText2);
		//$(this).attr('src', $(this).attr('src').repleace('_off', '_on'));
	})
	
	$('.rollover > img').mouseleave(function(){
		var srcText = $(this).attr('src').replace('_on','_off')
		$(this).attr('src',srcText);
		
	})
	var h = $('.rollover > img');
		h.hover(function(){
			$(this).attr('src').replace('_on','_off')
		})
		
})
//var h = $('.data tr');
	//h.hover(function(){
	//	h.addClass('td_mouseover');
	//}, function(){
	//	h.removeClass('td_mouseover');
	//})