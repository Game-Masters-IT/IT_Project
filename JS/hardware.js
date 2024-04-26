let productBoxes = document.querySelectorAll('.product-box');
for (let j = 0; j < 6; j++){
    let productImages = [];
    for (let i = 0; i < 6; ++i){
        productImages[i] = productBoxes[j].querySelector(`#p${i + 1}`);
    }
    let lastChoise = 0;
    const imgToChange = productBoxes[j].querySelector('img');
    for (let i = 0; i < 6; ++i){
        productImages[i].onclick = () => {
            productImages[lastChoise].classList.remove("active-img");
            productImages[i].classList.add("active-img");
            lastChoise = i;
            imgToChange.src = `Images/hardware/chair-${j + 1}-${i + 1}.png`;
        };
    }
}

let productB = document.querySelectorAll('.product-b');
for (let j = 0; j < 4; j++){
    let productImage = [];
    for (let i = 0; i < 2; ++i){
        productImage[i] = productB[j].querySelector(`#p${i + 1}`);
    }
    let lastChoise = 0;
    const imgToChange = productB[j].querySelector('img');
    for (let i = 0; i < 2; ++i){
        productImage[i].onclick = () => {
            productImage[lastChoise].classList.remove("first-img");
            productImage[i].classList.add("first-img");
            lastChoise = i;
            imgToChange.src = `Images/hardware/headphone-${j + 1}-${i + 1}.png`;
        };
    }
}














let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
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