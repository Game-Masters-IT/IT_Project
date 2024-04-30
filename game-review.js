let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("detailbox");
  let dots = document.getElementsByClassName("dot");
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
}


let slideIndexx = 1;
showSlidess(slideIndexx);

function plusSlidess(n) {
  showSlidess(slideIndexx += n);
}

function currentSlidee(n) {
  showSlidess(slideIndexx = n);
}

function showSlidess(n) {
  let i;
  let slidess = document.getElementsByClassName("detailboxv2");
  let dotss = document.getElementsByClassName("dotv2");
  if (n > slidess.length) {slideIndexx = 1}    
  if (n < 1) {slideIndexx = slidess.length}
  for (i = 0; i < slidess.length; i++) {
    slidess[i].style.display = "none";  
  }
  for (i = 0; i < dotss.length; i++) {
    dotss[i].className = dotss[i].className.replace(" active1", "");
  }
  slidess[slideIndexx-1].style.display = "block";  
  dotss[slideIndexx-1].className += " active1";
}




/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown_0").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.item_1')) {
    var dropdowns = document.getElementsByClassName("items");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function myFunction2() {
  document.getElementById("myDropdown_1").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.item_2')) {
    var dropdowns = document.getElementsByClassName("items_1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// script.js

// To access the stars
let stars = 
	document.getElementsByClassName("star");
let output = 
	document.getElementById("output");

// Funtion to update rating
function gfg(n) {
	remove();
	for (let i = 0; i < n; i++) {
		if (n == 1) cls = "one";
		else if (n == 2) cls = "two";
		else if (n == 3) cls = "three";
		else if (n == 4) cls = "four";
		else if (n == 5) cls = "five";
		stars[i].className = "star " + cls;
	}
	output.innerText = "Rating is: " + n + "/5";
}

// To remove the pre-applied styling
function remove() {
	let i = 0;
	while (i < 5) {
		stars[i].className = "star";
		i++;
	}
}



function myFunction_0() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function hide() {
  var x = document.getElementById("myDIV");
  x.style.display = "none";
}
window.onload = hide;

function play() {
  var audio = document.getElementById("audio");
  audio.play();
}





let cartGames = JSON.parse(localStorage.getItem('cart-games')) || {};
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart-btn')) {
        let gameToBeAdded = {
            gameName: e.target.getAttribute('gamename'),
            gamePrice: e.target.getAttribute('gameprice'),
            gameImage: e.target.getAttribute('gameimage'),
            gameId: e.target.getAttribute('gameid'),
        };
        cartGames[e.target.getAttribute('gameid')] = gameToBeAdded;
        localStorage.setItem('cart-games', JSON.stringify(cartGames));
        document.getElementById('cart-counter').innerHTML = Object.keys(cartGames).length;
    }
});