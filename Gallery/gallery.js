const pagecolor= document.getElementById("myModal"); 
const textColor = document.getElementById("myModal");

function myFunction(){
if(document.getElementById("background").value=="#f3f3f3"){
  pagecolor.style.backgroundColor = "#DAA520";
}
else if(document.getElementById("background").value=="firebrick"){
    pagecolor.style.backgroundColor = "firebrick";
}
else if(document.getElementById("background").value=="aqua"){
    pagecolor.style.backgroundColor = "aqua";
}
else if(document.getElementById("background").value=="#A9A9A9"){
    pagecolor.style.backgroundColor = "#A9A9A9";
}
else if(document.getElementById("background").value=="#4B0082"){
    pagecolor.style.backgroundColor = "#4B0082";
}
else{
    pagecolor.style.backgroundColor = "white";
}
}

function changeTextColor(){
    if(document.getElementById("text").value=="blue"){
        textColor.style.color = "blue";
       
      }
    else if(document.getElementById("text").value=="gold"){
        textColor.style.color = "gold";
       
    }
    else if(document.getElementById("text").value=="gray"){
        textColor.style.color = "gray";
        
    }
	else if(document.getElementById("text").value=="red"){
        textColor.style.color = "red";
       
    }
	else if(document.getElementById("text").value=="#00FFFF"){
        textColor.style.color = "#00FFFF";
       
    }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("gallery_Slider");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}