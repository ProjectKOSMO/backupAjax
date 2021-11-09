$(function(){

const toggleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active'); // 클릭시 active없으면 active추가
    icons.classList.toggle('active');
});

const tabs = document.querySelectorAll("[data-tab-target]");
const tabcon = document.querySelectorAll("[data-tab-content]");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabcon.forEach((tabc_all) => {
      tabc_all.classList.remove("active");
    });

    target.classList.add("active");
  })
})



/*================================================================================영화메뉴*/
var movie_ticket=0;

$('.movie_list img').dblclick(function(){ 
   change_main_poster(this)
})

function change_main_poster(o){
   var sor = $(o).attr('src') //더블클릭하면 해당 src의 위치정보를가져옴
   jQuery('#main_image').attr("src",sor); //main 영화포스터 교체하는함수
}


jQuery('#main_image').dblclick(function(){ 
	submit_poster(this)
	movie_ticket +=1;
})

function submit_poster(s){
	 var sol = JSON.stringify($(s).attr('src')).slice(16,-5)
    alert("예매되었습니다.")
	alert(sol)
	$.ajax({
			 url : "ticket.jsp",
    		 dataType :"xml",
   		     success : movielist,
			 error : function(err){
				alert('에러발생');
				console.log(err)
				}
			})
	
	
	
}

function movielist(movie_data){
		
		var movie_Name = $(movie_data).find('mname').text().slice(0,4);
		var movie_price= $(movie_data).find('mprice').text().slice(0,5);
				
	$('#tbd >li ').append("<li id='foodlist'>"+ movie_Name +" : " + movie_ticket +"매" + (movie_ticket*movie_price) +"원 </li>");
}


	


/*=================================================================================*/
var food1=0;
var food2=0;
var food3=0;
var food4=0;
var food5=0;
var food6=0;
var food7=0;
var food8=0;

$('.menupan_image .food img').dblclick(function(){ //먹거리 더블클릭시 
  img_check(this)
})

function img_check(c){
	var osd = JSON.stringify($(c).attr('src')).slice(14,-5)
	
	if (osd == "popcorn"){
 	 	food1 += 1;   
		$('#foodtotal #food1').remove()
		$('#foodtotal').append("<div id='food1'>오리지날 팝콘 X  "+food1+" </div>")
	}else if (osd == "popcorn2"){
   		food2 += 1;   
		$('#foodtotal #food2').remove()
		$('#foodtotal').append("<div id='food2'>카라멜 팝콘 X  "+food2+" </div>")
	}else if (osd == "sqaud"){
   		food3 += 1;   
		$('#foodtotal #food3').remove()
		$('#foodtotal').append("<div id='food3'>버터오징어 X  "+food3+" </div>")
	
	}else if (osd == "hotdog"){
   		food4 += 1;   
		$('#foodtotal #food4').remove()
		$('#foodtotal').append("<div id='food4'>핫도그 X  "+food4+" </div>")
	}else if (osd == "nachos"){
   		food5 += 1;   
		$('#foodtotal #food5').remove()
		$('#foodtotal').append("<div id='food5'>나쵸 X  "+food5+" </div>")
	}else if (osd == "nuts"){
   		food6 += 1;   
		$('#foodtotal #food6').remove()
		$('#foodtotal').append("<div id='food6' >땅콩 X  "+food6+" </div>")
	}else if (osd == "waffle"){
   		food7 += 1;   
		$('#foodtotal #food7').remove()
		$('#foodtotal').append("<div id='food7' >와플 X  "+food7+" </div>")
	}else if (osd == "ddock"){
   		food8 += 1;   
		$('#foodtotal #food8').remove()
		$('#foodtotal').append("<div id='food8' >떡볶이 X  "+food8+" </div>")
	}

}

$('.tabmenu2 #btnSelect1').click(function(){ //장바구니 비우기
	$('#foodtotal #food1').remove()
	$('#foodtotal #food2').remove()
	$('#foodtotal #food3').remove()
	$('#foodtotal #food4').remove()
	$('#foodtotal #food5').remove()
	$('#foodtotal #food6').remove()
	$('#foodtotal #food7').remove()
	$('#foodtotal #food8').remove()
	 food1=0;
	 food2=0;
	 food3=0;
	 food4=0;
	 food5=0;
	 food6=0;
	 food7=0;
	 food8=0;
	})


$('.tabmenu2 #btnSelect').click(function(){ //담기버튼 클릭시 주문내역에 리스트 만들기
		
		if($('#foodtotal div').length <= 0) { // 장바구니가 비어있을경우 
			alert("장바구니가 비었습니다.")
 	    }else{
			alert("장바구니에 등록되었습니다.")
			$.ajax({
			 url : "food.jsp",
    		 dataType :"xml",
   		     success : foodlist,
			 error : function(err){
				alert('에러발생');
				console.log(err)
			},
			})
		
		}
		
	})
function foodlist(data){
		
		var item_Name = $(data).find('mname').text().slice(0,7);
		var item_price= $(data).find('mprice').text().slice(0,4);
	/*===========================================================오리지날 팝콘 ,갯수 ajax로 불러오고 데이터 가공===*/
		var item_Name2 = $(data).find('mname').text().slice(7,12);
		var item_price2 =$(data).find('mprice').text().slice(4,8);
	/*===================================================================================================*/	
		var item_Name3 = $(data).find('mname').text().slice(12,17);
		var item_price3 =$(data).find('mprice').text().slice(8,12);
	/*===================================================================================================*/		
		var item_Name4 = $(data).find('mname').text().slice(17,20);
		var item_price4 =$(data).find('mprice').text().slice(12,16);
	/*===================================================================================================*/		
		var item_Name5 = $(data).find('mname').text().slice(20,22);
		var item_price5 =$(data).find('mprice').text().slice(16,20);
	/*===================================================================================================*/		
		var item_Name6 = $(data).find('mname').text().slice(22,24);
		var item_price6 =$(data).find('mprice').text().slice(20,24);
	/*===================================================================================================*/		
		var item_Name7 = $(data).find('mname').text().slice(24,26);
		var item_price7 =$(data).find('mprice').text().slice(24,28);
	/*===================================================================================================*/		
		var item_Name8 = $(data).find('mname').text().slice(26,29);
		var item_price8 =$(data).find('mprice').text().slice(28,32);
	/*===================================================================================================*/	
	
	
		
		
		
		
		
		
		
		
					
	
			if($('#foodtotal #food1').length ==1){
	        $('#tbd >li ').append("<li id='foodlist'>"+ item_Name +" : " + food1 +"개 " + (item_price *food1) +"원 </li>");
	        }

			if($('#foodtotal #food2').length ==1){
			$('#tbd >li ').append("<li id='foodlist'>"+ item_Name2 +" : " + food2 +"개 " + (item_price2 *food2) +"원 </li>");
			}
			
			if($('#foodtotal #food3').length ==1){
			$('#tbd >li ').append("<li id='foodlist'>"+ item_Name3 +" : " + food3 +"개 " + (item_price3 *food3) +"원 </li>");
			}
			
			if($('#foodtotal #food4').length ==1){
			$('#tbd >li ').append("<li id='foodlist'>"+ item_Name4 +" : " + food4 +"개 " + (item_price4 *food4) +"원 </li>");
			}
			
			if($('#foodtotal #food5').length ==1){
			$('#tbd >li ').append("<li id='foodlist'>"+ item_Name5 +" : " + food5 +"개 " + (item_price5 *food5) +"원 </li>");
			}
			
			if($('#foodtotal #food6').length ==1){
			$('#tbd >li ').append("<li id='foodlist'>"+ item_Name6 +" : " + food6 +"개 " + (item_price6 *food6) +"원 </li>");
			}
			if($('#foodtotal #food7').length ==1){
			$('#tbd >li ').append("<li id='foodlist'>"+ item_Name7 +" : " + food7 +"개 " + (item_price7 *food7) +"원 </li>");
			}
			if($('#foodtotal #food8').length ==1){
			$('#tbd >li ').append("<li id='foodlist'>"+ item_Name8 +" : " + food8 +"개 " + (item_price8 *food8) +"원 </li>");
			}
	} 		
		
    
     
$('.tabmenu4 #button1').click(function(){ //초기화 버튼 클릭
   reset(this)
	movie_ticket = 0;
})
function reset(){ // 초기화버튼 클릭시 총주문내역 삭제

	$('.tabmenu4 #tbd #foodlist').remove()
}
	


     // person.each close
}) //selectResult close

