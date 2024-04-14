let productColors = [];
for (let i = 0; i < 6; ++i){
    productColors[i] = document.getElementById(`p${i + 1}`);
}
let last_color = 0;
const item1 = document.querySelector(".item-1 img");
for (let i = 0; i < 6; ++i){
    productColors[i].onclick = () => {
        productColors[last_color].classList.remove("active");
        productColors[i].classList.add("active");
        last_color = i;
        item1.style.transition = '.3s';
        item1.src = `D:\pc hardware\chair-${i + 1}.png`;
    };
}