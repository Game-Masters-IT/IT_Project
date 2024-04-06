// landing page images bullets
const imageUrls = [];
let landig_imgs = [];
for (let i = 0; i < 6; ++i){
    imageUrls[i] = `Images/homeImgs/Landing-Page-${i + 1}.jpg`
    landig_imgs[i] = document.getElementById(`land-${i + 1}`);
}
// add images to the page on load
window.onload = () => {
    imageUrls.forEach(url =>{
        const imgElement = document.createElement('img');
        imgElement.style.display = 'none';
        imgElement.src = url;
    });
};
let last_bullet = 0;
for (let i = 0; i < 6; ++i){
    landig_imgs[i].onclick = () => {
        landig_imgs[last_bullet].classList.remove("active");
        landig_imgs[i].classList.add("active");
        last_bullet = i;
        document.querySelector(".landing-page").style.background = `url(Images/homeImgs/Landing-Page-${i + 1}.jpg) center center / cover`;
    };
}