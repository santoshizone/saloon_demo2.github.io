
$(document).ready(function(){
	$('.sec3_col1').waypoint(function(direction){
		$('.sec3_col1').addClass(' animated fadeInLeft')
	},{
		offset:'50%'
	})
});






mybutton = document.getElementById("myBtn2");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




$(document).ready(function(){

$('.sec2_form').waypoint(function(direction){

    $('.sec2_form').addClass(' animated fadeInRight')
    
    },{
    offset:'50%'
  })


$('.sec4_col1').waypoint(function(direction){

    $('.sec4_col1').addClass(' animated fadeInUp')
    $('.sec4_col2').addClass(' animated fadeInUp')
    $('.sec4_col3').addClass(' animated fadeInUp')

    
    },{
    offset:'50%'
  })


$('.sec5_col1').waypoint(function(direction){

    $('.sec5_col1').addClass(' animated fadeInLeft')
    $('.sec5_col2').addClass(' animated fadeInRight')
 

    
    },{
    offset:'50%'
  })


$('.box1').waypoint(function(direction){

    $('.box1').addClass(' animated fadeInDown')
    $('.sec6_img').addClass(' animated fadeInRight')
 

    
    },{
    offset:'50%'
  })



 




});
