// 제이쿼리 작업을 여기에 작성합니다.

$(function(){	
	var date = new Date(); 
// 1번 ------------------------------------------------------	
	$('#date_wrap .year').text(date.getFullYear())
	$('#date_wrap .month').text(date.getMonth() + 1)
	$('#date_wrap .date').text(date.getDate())
	
// 2번 ------------------------------------------------------	
	$('#keyword').focus(function(){
		$('p > #keyword').css("background-position","0 -500px");
	})
	$('#keyword').blur(function(){
		$('p > #keyword').css("background-position","0 0");
	})
	
// 3번 ------------------------------------------------------
	
	$('.tab_btn1 img').click(function(){
		$('.tab_btn1 img').attr('src', $('.tab_btn1 img').attr('src').replace('_out','_over'));
		$('.tab_btn2 img').attr('src', $('.tab_btn2 img').attr('src').replace('_over','_out'));
		$('.tab_btn3 img').attr('src', $('.tab_btn3 img').attr('src').replace('_over','_out'));
		var allDd = $('#tabmenu').find('dd')
			$('#tabmenu').each(function(){
				allDd.hide();
				$('.tab_btn1').next().show()
			})
	})
	
	$('.tab_btn2 img').click(function(){
		$('.tab_btn2 img').attr('src', $('.tab_btn2 img').attr('src').replace('_out','_over'));
		$('.tab_btn1 img').attr('src', $('.tab_btn1 img').attr('src').replace('_over','_out'));
		$('.tab_btn3 img').attr('src', $('.tab_btn3 img').attr('src').replace('_over','_out'));
		var allDd = $('#tabmenu').find('dd')
		$('#tabmenu').each(function(){
			allDd.hide();
			$('.tab_btn2').next().show()
		})
	})
	
	$('.tab_btn3 img').click(function(){
		$('.tab_btn3 img').attr('src', $('.tab_btn3 img').attr('src').replace('_out','_over'));
		$('.tab_btn1 img').attr('src', $('.tab_btn1 img').attr('src').replace('_over','_out'));
		$('.tab_btn2 img').attr('src', $('.tab_btn2 img').attr('src').replace('_over','_out'));
		var allDd = $('#tabmenu').find('dd')
		$('#tabmenu').each(function(){
			allDd.hide();
			$('.tab_btn3').next().show()
	
		})
	})

// 4번 ---------------------------------------------------------
	
// index.html에   아래 문구 추가 
// <link rel="stylesheet" type="text/css" href="css/jquery.bxslider.css" media="all" />
	
	
// css 폴더에 jquery.bxslider.css 파일 추가	

// 기존 파일에 있었던 background 색 설정 삭제
	
// jquery.bxslider.css 에서  별도의 이전 버튼, 다음 버튼 위치를 다음과 같이 하드코딩으로 설정
// .bx-wrapper .bx-controls-direction a // 이전, 다음 버튼의 공통 높이 위치(top: 45%)
// .bx-wrapper .bx-prev  // 이전 버튼 기능 (left: -63px;)
// .bx-wrapper .bx-next  // 다음 버튼 기능 (right: -63px;)	
	
// 이전 버튼, 다음 버튼으로 명시된 기존 index.html의 prev_btn, next_btn에는 아무 기능도 추가하지 않음.

	
	$('#best_bg ul').bxSlider({
        mode:"horizontal",    // 가로 수평으로 슬라이드된다.
        speed:500,        // 이동 속도를 설정한다.
        pager:false,    // 현재 위치 페이지 표시 여부를 설정한다.
        moveSlides:5,    // 슬라이드 이동 시 개수를 설정한다.
        slideWidth:125,    // 슬라이드 너비를 설정한다.
        minSlides:1,    // 최소 노출 개수를 설정한다.
        maxSlides:5,    // 최대 노출 개수를 설정한다.
        slideMargin:30, // 슬라이드 간의 간격을 설정한다.
        auto:true,         // 자동으로 흐를지 여부를 설정한다.
        autoHover:true, // 마우스오버 시 정지할지를 설정한다.
        controls:true    // 이전 버튼, 다음 버튼 노출 여부를 설정한다.
	});

	
// 5번 ------------------------------------------------------	
// 로그인 버튼에 클릭이벤트는 아직 추가하지 않음.
	
	$('.login_wrap img').click(function(){
		$('#login_f').css("top","20px");
	})
	
	$('.login_close_btn img').click(function(){
		$('#login_f').css("top","-500px");
	})

	
// 6번 ------------------------------------------------------
	$('#total_btn').click(function(){
		$('#total_menu').css("display","block");
	})
	
	$('#total_close').click(function(){
		$('#total_menu').css("display","none");
	})

	
	

})

