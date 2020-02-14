const shenal = document.getElementById("shenalImg");
const shenalD = document.getElementById("shenalDescription");

const chamath = document.getElementById("chamathImg");
const chamathD = document.getElementById("chamathDescription");

const chamika = document.getElementById("chamika");
const chamikaD = document.getElementById("chamikaDescription");

const jayamal = document.getElementById("jayamalImg");
const jayamalD = document.getElementById("jayamalDescription");






document.getElementById("buisness").addEventListener("click",()=>{
    document.getElementById("main-header").style.backgroundImage = "url(watch.jpg)";
})

document.getElementById("Education").addEventListener("click",()=>{
    document.getElementById("main-header").style.backgroundImage = "url(img/hero.jpg)";
})


//shenal pelpola
shenal.addEventListener('mouseover', (event) => {
    shenalD.innerHTML = 
    "<ol> <li>First name:   shenal</li>"+
    "<li>Last name:   pelpola</li>"+
    "<li> IIT ID:   2018198</li>"+
    "<li> Uow ID:   W1714945</li></ol>";
    shenalD.style.backgroundColor = "black";
    shenalD.style.color = "white";

  });
  shenal.addEventListener('mouseout', (event) => {
    shenalD.innerHTML = "";
;
  });

//chamath peris
chamath.addEventListener('mouseover', (event) => {
    chamathD.innerHTML = 
    "<ol> <li>First name:   shenal</li>"+
    "<li>Last name:   pelpola</li>"+
    "<li> IIT ID:   2018198</li>"+
    "<li> Uow ID:   W1714945</li></ol>";
    chamathD.style.backgroundColor = "black";
    chamathD.style.color = "white";



  });
chamath.addEventListener('mouseout', (event) => {
    chamathD.innerHTML = "";
  });
  
//chamika ciran
chamika.addEventListener('mouseover', (event) => {
    chamikaD.innerHTML = 
    "<ol> <li>First name:shenal</li>"+
    "<li>Last name:pelpola</li>"+
    "<li>IIT ID:2018198</li>"+
    "<li>Uow ID:W1714945</li></ol>";
    chamikaD.style.backgroundColor = "black";
    chamikaD.style.color = "white";
  });
chamika.addEventListener('mouseout', (event) => {
    chamikaD.innerHTML = "";
  });


//jayamal sanuka
  jayamal.addEventListener('mouseover', (event) => {
    jayamalD.innerHTML = 
    "<ol><li>First name:   shenal</li>"+
    "<li>Last name:   pelpola</li>"+
    "<li>IIT ID:   2018198</li>"+
    "<li>Uow ID:   W1714945</li></ol>";
    jayamalD.style.backgroundColor = "black";
    jayamalD.style.color = "white";
  });
jayamal.addEventListener('mouseout', (event) => {
    jayamalD.innerHTML = "";
  });


document.getElementById("user").addEventListener("mouseover",()=>{
  document.getElementById("user").style.opacity = "0.7";
})

document.getElementById("user").addEventListener("mouseout",()=>{
  document.getElementById("user").style.opacity = "1";
})

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
