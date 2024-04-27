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
// Adding the Search bar to all pages
let theSearchBar = document.createElement('form');
theSearchBar.classList.add('search-bar');
theSearchBar.classList.add('belong-to-srch');
theSearchBar.setAttribute('action', 'search-results.html');
theSearchBar.innerHTML = `
    <button title="Search" class="belong-to-srch" type="button"><i class="fa-solid fa-magnifying-glass fa-fw belong-to-srch"></i></button>
    <input class="belong-to-srch" placeholder="Search for a game..." type="search" name="search" id="search-input">
`;
let theProfileDiv = document.querySelector('.rightOptions .profile');
theProfileDiv.parentNode.insertBefore(theSearchBar, theProfileDiv);
let theSearchBtn = document.querySelector('.search-bar button');
let searchInput = document.querySelector('.search-bar input');

theSearchBtn.addEventListener('click', () => {
    if (searchInput.value === ""){
        theSearchBtn.classList.toggle('search-btn-after');
        theSearchBtn.querySelector('i').classList.toggle('search-i-after');
        searchInput.classList.toggle('search-input-after');
    }
    else {
        theSearchBtn.setAttribute('type', 'submit');
    }
});
document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('belong-to-srch')){
        theSearchBtn.classList.remove('search-btn-after');
        theSearchBtn.querySelector('i').classList.remove('search-i-after');
        searchInput.classList.remove('search-input-after');
        searchInput.value = "";
    }
});
window.onload = () => {
    searchInput.value = "";
};
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
let cartIconHeader = document.querySelector('.fa-bag-shopping');
cartIconHeader.classList.remove('fa-bag-shopping');
cartIconHeader.classList.add('fa-cart-shopping');
document.getElementById('cart-counter').innerHTML = Object.keys(JSON.parse(localStorage.getItem('cart-games'))).length;