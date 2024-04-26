// Adding Games To Cart
let gamesToBeAdded = JSON.parse(localStorage.getItem('cart-games')) || {};
function addGamesStrorageCart() {
    Object.values(gamesToBeAdded).forEach(e => {
        let itemToBeAdded = `
        <div class="item" gameid="${e.gameId}" name="${e.gameId}" value="${e.gamePrice}">
            <div class="product">
                <img src="${e.gameImage}" alt="${e.gameName}">
                <a href="game-product-page.html?game=${e.gameId}"><h4 id="game-name">${e.gameName}</h4></a>
            </div>
            <span id="price">${e.gamePrice}</span>
            <div class="quantity">
                <div class="minus"><i class="fa-solid fa-minus"></i></div>
                <span id="quantity-ctrl">1</span>
                <div class="plus"><i class="fa-solid fa-plus"></i></div>
            </div>
            <span id="total-price">${e.gamePrice}</span>
            <i class="fa-solid fa-trash"></i>
        </div>
        `;
        document.querySelector('.games').innerHTML += itemToBeAdded;
    });
}
addGamesStrorageCart();
// document.querySelector('.just-to-test').onclick = () => {
//     let gameToBeAdded = {
//         gameName: 'Far Cry® 6 Game of the Year Edition',
//         gamePrice: '$119.99',
//         gameImage: './Images/homeImgs/Trending/farcry.jpg',
//         gameId: '99',
//     };
//     gamesToBeAdded['99'] = gameToBeAdded;
//     localStorage.setItem('cart-games', JSON.stringify(gamesToBeAdded));
//     document.getElementById('cart-counter').innerHTML = Object.keys(gamesToBeAdded).length;
//     addGamesStrorageCart();
//     summarySubTotal();
//     location.reload();
// };
/*===================================================================*/

// Quantity and total price
function getParentElement(element, parentClass) {
    while (!element.classList.contains(parentClass)|| element == document.body) {
        element = element.parentElement;
    }
    return element;
}
let quantity, totalPrice, productPrice, currtentQuantity;
function quantityPlusMinus(target, sign){
    quantity = getParentElement(target, 'item').querySelector('#quantity-ctrl');
    totalPrice = getParentElement(target, 'item').querySelector('#total-price');
    productPrice = getParentElement(target, 'item').querySelector('#price');
    currtentQuantity = parseInt(quantity.innerHTML);
    
    if ((currtentQuantity < 10 && sign === 'plus') || (currtentQuantity > 1 && sign === 'minus')) {
        if (sign === 'plus') currtentQuantity++;
        else currtentQuantity--;
        quantity.innerHTML = currtentQuantity;
        totalPrice.innerHTML = `$${(productPrice.innerHTML.slice(1) * currtentQuantity).toFixed(2)}`;
        getParentElement(target, 'item').setAttribute('value', totalPrice.innerHTML);
    }
    summarySubTotal();
}
document.addEventListener('click', (e) => {
    if (e.target.className === 'plus' || e.target.parentElement.className === 'plus') {
        quantityPlusMinus(e.target, 'plus');
    }
    if (e.target.className === 'minus' || e.target.parentElement.className === 'minus') {
        quantityPlusMinus(e.target, 'minus');
    }
});

let subTotalSpan = document.querySelector('#sub-total');
function summarySubTotal(){
    let allItems = document.querySelectorAll('.item');
    let subTotal = 0;
    allItems.forEach(it => {
        subTotal += parseFloat(it.querySelector('#total-price').innerHTML.slice(1));
    });
    subTotalSpan.innerHTML = `$${subTotal.toFixed(2)}`; 
    document.getElementById('order-total').innerHTML = `$${subTotal.toFixed(2) - (document.querySelector('#disc') ? subTotal.toFixed(2) / 2 : 0)}`;
    document.getElementById('total-to-be-sumbmited').setAttribute('value', `${subTotal.toFixed(2) - (document.querySelector('#disc') ? subTotal.toFixed(2) / 2 : 0)}`)
    checkStatus();
}
summarySubTotal();
document.addEventListener('click', e => {
    if (e.target.classList.contains('fa-trash')){
        delete gamesToBeAdded[getParentElement(e.target, 'item').getAttribute('gameid')];
        localStorage.setItem('cart-games', JSON.stringify(gamesToBeAdded));
        document.getElementById('cart-counter').innerHTML = Object.keys(gamesToBeAdded).length;
        getParentElement(e.target, 'item').classList.add('removing');
        setTimeout(() => {
            getParentElement(e.target, 'item').remove();
            summarySubTotal();
        }, 200);
    }
});
function checkStatus(){
    if (subTotalSpan.innerHTML === '$0.00') {
        document.querySelector('.check').disabled = true;
        document.querySelector('.get').disabled = true;
        document.querySelector('.get').style.cursor = 'default';
        document.querySelector('#coupon').disabled = true;
        document.querySelector('.check').classList.add('check-disabled');
        document.querySelector('.order-summary').style.opacity = .6;
        document.querySelector('.games').innerHTML = `
        <div class="empty-cart">
        <i class="fa-solid fa-cart-shopping"></i>
        <span>Your cart is currently empty. Start exploring our collection now to fill it with your favorite games!</span>
        </div>
        `;
        if (document.querySelector('.add-content')) document.querySelector('.add-content').remove();
    }
    else {
        document.querySelector('.check').disabled = false;
        document.querySelector('.get').disabled = false;
        document.querySelector('.get').style.cursor = 'pointer';
        document.querySelector('#coupon').disabled = false;
        document.querySelector('.check').classList.remove('check-disabled');
        document.querySelector('.order-summary').style.opacity = 1;
        if (document.querySelector('.empty-cart'))document.querySelector('.empty-cart').remove();
    }
}
/*===================================================================*/
// coupon
let couponBox = document.querySelector(".coupon-box");
document.addEventListener('click', e => {
    if (e.target.classList.contains('get')){
        if (document.querySelector('.add-content')) document.querySelector('.add-content').remove();
        let theCouponText = document.querySelector('#coupon');
        if (theCouponText.value === 'ITProject'){
            let congratesSpan = `
                <div class="add-content" style="width: 100%;">
                    <span style = "
                    color: var(--main);
                    margin-bottom: 20px;
                    display: block;
                    ">&#127881; Congratulations! You've a 50% discount! </span>
                    <div class="discount" style = "width: 100%; display: flex; justify-content: space-between;">
                        <span>Discount</span>
                        <span id="disc"> -50%</span>
                    </div>
                </div>
            `;
            couponBox.innerHTML += congratesSpan;
        }
        else if (theCouponText.value === "") {
            couponBox.innerHTML += `
                <div class="add-content" style="color:red; font-weight: normal; width: 100%;">
                    Please Enter A Coupon First!
                </div>
            `;
        }
        else {
            couponBox.innerHTML += `
                <div class="add-content" style="color:red; font-weight: normal; width: 100%;">
                    Invalid Coupon!
                </div>
            `;
        }
        summarySubTotal();
    }
});
let coupon = document.getElementById('add-coupon');
let couponClose = document.getElementById('coupon-close');
coupon.addEventListener('click', () => {
    couponBox.classList.toggle('hide');
});
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-circle-xmark')) {
        couponBox.classList.add('hide');
    }
});

// Clean The Cart
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('check')) {
        localStorage.setItem('cart-games', JSON.stringify({}));
        
    }
});
document.querySelector('.check').addEventListener