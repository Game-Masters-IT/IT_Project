// Toggle Dark Mode And Light Mode
let theme = localStorage.getItem("mode");
const themeToggle = document.querySelector("#theme");
const icon = document.querySelector("#theme-icon");

const enableLightMode = () => {
    // add lightMood to the body
    document.body.classList.add("light-theme");
    // Update mode in the local storage
    localStorage.setItem("mode", "enabled");
    icon.className = "fa-solid fa-moon fa-fw"
};
const disableLightMode = () => {
    // remove lightMood from the body
    document.body.classList.remove("light-theme");
    // Update mode in the local storage
    localStorage.setItem("mode", null);
    icon.className = "fa-solid fa-sun fa-fw"
};
if (theme === "enabled") {
    enableLightMode();
}
else {
    icon.className = "fa-solid fa-sun fa-fw"
}
themeToggle.addEventListener("click", () => {
    theme = localStorage.getItem("mode")
    if (theme !== "enabled"){
        enableLightMode();
    }
    else {
        disableLightMode();
    }
});
/*=========================================*/
// toggle menu on small screens
const menuIcon = document.getElementById("toggle-menu");
const pagesLinks = document.getElementById("pages-links");
const arrow = document.getElementById("menu-arrow");
let display = 0;
menuIcon.onclick = () => {
    if (display) {
        pagesLinks.style.display = 'none';
        arrow.classList.remove("rotate-arrow-on-click");
        display = 0;
    }
    else {
        pagesLinks.style.display = 'flex';
        arrow.classList.add("rotate-arrow-on-click");
        display = 1;
    }
};
document.onclick = (e) => {
    if (!menuIcon.contains(e.target) && !pagesLinks.contains(e.target) && menuIcon.style.display !== "none") {
        pagesLinks.style.display = 'none';
        arrow.classList.remove("rotate-arrow-on-click");
        display = 0;
    }
};
/*=========================================*/
// landing page images bullets
let landig_imgs = [];
for (let i = 0; i < 6; ++i){
    landig_imgs[i] = document.getElementById(`land-${i + 1}`);
}
let last_bullet = 0;
for (let i = 0; i < 6; ++i){
    landig_imgs[i].onclick = () => {
        landig_imgs[last_bullet].classList.remove("active");
        landig_imgs[i].classList.add("active");
        last_bullet = i;
        document.querySelector(".landing-page").style.background = `url(../Images/homeImgs/Landing-Page-${i + 1}.jpg) center center / cover`;
    };
}