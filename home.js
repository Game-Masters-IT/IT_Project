// landing page images bullets
let landig_imgs = [];
for (let i = 0; i < 6; ++i){
    landig_imgs[i] = document.getElementById(`land-${i + 1}`);
}
let last_bullet = 0;
const landingPage = document.querySelector(".landing-page");
for (let i = 0; i < 6; ++i){
    landig_imgs[i].onclick = () => {
        landig_imgs[last_bullet].classList.remove("active");
        landig_imgs[i].classList.add("active");
        last_bullet = i;
        landingPage.style.transition = '.3s';
        landingPage.style.backgroundImage = `url(Images/homeImgs/Landing-Page-${i + 1}.jpg)`;
    };
}
// Auto images show [not ready yet]
// function autoChangingImages(){
//     landig_imgs[last_bullet].classList.remove("active");
//     last_bullet++;
//     last_bullet %= 6;
//     landig_imgs[last_bullet].classList.add("active");
//     landingPage.style.transition = '1s';
//     landingPage.style.backgroundImage = `url(Images/homeImgs/Landing-Page-${last_bullet + 1}.jpg)`;
// }
// setInterval(autoChangingImages, 3000);
/*=============================================*/
// slide buttons
const rightSlideArrow = document.getElementById("slide-right");
const leftSlideArrow = document.getElementById("slide-left");
const gamesSlideShow = document.querySelector(".games");
let lastslid = 0;
rightSlideArrow.onclick = () => {
    if (lastslid === 0){
        gamesSlideShow.classList.add("game-slide-1");
        lastslid = 1;
    }
    else {
        gamesSlideShow.classList.add("game-slide-2");
        lastslid = 2;
    }
};
leftSlideArrow.onclick = () => {
    if (lastslid === 2) {
        gamesSlideShow.classList.remove("game-slide-2");
        lastslid = 1;
    }
    else {
        gamesSlideShow.classList.remove("game-slide-1");
        lastslid = 0;
    }
};