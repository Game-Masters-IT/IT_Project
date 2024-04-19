const carousel = document.querySelector(".carousel"),
arrowIcons = document.querySelector(".wrapper i");



let isDragStart = false , prevPageX , prevScrollleft;
const dragStart =() => {
  isDragStart = true;
  prevPageX = e.pageX
  prevScrollleft = carousel.scrollLeft;
}
const dragging = (e) => {
  if(!isDragStart)return;
  e.preventDeafult();
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollleft - positionDiff;
}

const dragStop =() =>{
  isDragStart = false;
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);










var icons = document.getElementsByClassName("icon");


for (var i = 0; i < icons.length; i++) {
  
  icons[i].addEventListener("click", function() {
    // Get the corresponding contenthidden element
    var contentId = this.id.replace("icon", "contenthidden");
    var target = document.getElementById(contentId);
    
    target.classList.toggle("clicked");
  });
}



// Set the date we're counting down to
var countDownDate = new Date("April 5, 2025 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);






var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  grabCursor: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
}); 
