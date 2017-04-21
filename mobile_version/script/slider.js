
//part 2  Modal  images
//Mine-----------------------------------------------
$(document).ready(function(){  //alert('part2');


      $(".click").click(function(){
        var src= $(this).prop('src'); //alert(src);
        var modal=document.getElementById("myModal");
        var modalImg = document.getElementById("img01");
        modal.style.display = "block";
        modalImg.src = src;
       //captionText.innerHTML = this.alt;

      //$('#' + imageId).attr('src', imageSrc);

    });
//end   $(".click").click(function(){



  $(".close").click(function(){
   $('.modal').hide(1000);
  });




showSlides(slideIndex);// have  to  use it   doc  ready  section,unless  it  won't  load  1st image  on load

});//end  ready
//end  mine part 2-------------------------------------------------














//part  1-slider--------------------------------
var slideIndex = 1;
//showSlides(slideIndex);// have  to  use it   doc  ready  section,unless  it  won't  load  1st image  on load



function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) 
{
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  //alert("slides length -> "+slides.length);
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}




//function next, prev  for  Modal  window---------!!!!!!!!!!!
function plusSlidesModal(n) {
 
  

	//if slideIndex(we  get  from  showSlides(n) more  than number  of  images)
	if(slideIndex>=($('.mySlides').length))
		     {alert('more');slideIndex=0;}

	//get  the  img  src path of  image what  was  clicked  from slider
	  var imagePath= $('.mySlides').eq(slideIndex).children("img").attr("src");
	//alert('class-> '+imagePath);
	  slideIndex++;


	//setting the  image
	    $('#img01').fadeOut(400, function() {
          $('#img01').attr("src",imagePath);
          $('#img01').fadeIn(500);
        });
    //end setting the  image	
 
}
//end function next, prev  for  Modal  window-----!!!!!!!









// END  part  1 -Slider












