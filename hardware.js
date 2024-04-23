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
