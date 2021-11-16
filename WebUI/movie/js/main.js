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


var food1 =0;
var food2 =0;
var food3 =0;
var food4 =0;
var food5 =0;
var food6 =0;
var food7 =0;
var food8 =0;
/*================================================================================영화메뉴*/

$('.movie_list img').dblclick(function(){
   change_main_poster(this)
})

function change_main_poster(o){
   var sor = $(o).attr('src') //더블클릭하면 해당 src의 위치정보를가져옴
   jQuery('#main_image').attr("src",sor); //main 영화포스터 교체하는함수
}




$('.menupan_image .food img').dblclick(function(){ //먹거리 더블클릭시 
  img_check(this)
})

function img_check(c){
	var osd = JSON.stringify($(c).attr('src')).slice(14,-5)
	
	if (osd == "popcorn"){
 	 	food1 += 1;   
		$('#foodtotal #food1').remove()
		$('#foodtotal').append("<div id='food1'>오리지날 팝콘 X  "+food1+" </div>")
		
	}
	else if (osd == "popcorn2"){
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
		$('#foodtotal').append("<div id='food5'>나초 X  "+food5+" </div>")
	}else if (osd == "nuts"){
   		food6 += 1;   
		$('#foodtotal #food6').remove()
		$('#foodtotal').append("<div id='food6'>땅콩 X  "+food6+" </div>")
	}else if (osd == "waffle"){
   		food7 += 1;   
		$('#foodtotal #food7').remove()
		$('#foodtotal').append("<div id='food7'>와플 X  "+food7+" </div>")
	}else if (osd == "ddock"){
   		food8 += 1;   
		$('#foodtotal #food8').remove()
		$('#foodtotal').append("<div id='food8'>떡볶이 X  "+food8+" </div>")
	}

}

  $('.tabmenu2 #btnSelect').click(function(){ //담기버튼 클릭시 주문내역에 리스트 만들기
		if($('#food1').length>0) {
		alert("장바구니에 등록되었습니다.")
			$.ajax({
			 url : "food.jsp",
    		 dataType :"xml",
   		     success : selectResult,
			 error : function(err){
				alert('에러발생');
				console.log(err)
				
			},
 	    })
		
		}else{
			alert("장바구니가 비었습니다.")
		}
		
		
		
	})
 
 function selectResult(data){
	  
		var item_Name = $(data).find('mname').text().slice(0,7);
		var item_Name2 = $(data).find('mname').text().slice(7,12);
		var item_price= $(data).find('mprice').text().slice(0,4);
	
			if(item_Name == '오리지날 팝콘'){
	        $('#tbd >li ').append("<li id='foodlist'>"+ item_Name +" : " + food1 +"개 " + (item_price *food1) +"원 </li>");
	        }else if(item_Name2){
			$('#tbd >li ').append("<li id='foodlist'>"+ item_Name2 +" : " + food2 +"개 " + (item_price *food2) +"원 </li>");
	}
		
 	}   
     
$('.tabmenu4 #button1').click(function(){ //초기화 버튼 클릭
   reset(this)

   
})
function reset(){ // 초기화버튼 클릭시 총주문내역 삭제

	$('.tabmenu4 #tbd #foodlist').remove()
}
	


     // person.each close
}) //selectResult close

