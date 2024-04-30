


const urlParams = new URLSearchParams(window.location.search);
let gameN = document.querySelector('#game-name');
let gameP = document.querySelector('#game-price');
let gameImg = document.querySelector('#game-img');
let gameD = document.querySelector('#game-desc');
let gameT = document.querySelector('#game-trailer');
fetch('Games.json').then(results => results.json()).then(data => {
    gameN.innerHTML = data[urlParams.get('game')].gameName;
    gameP.innerHTML = data[urlParams.get('game')].gamePrice;
    gameD.innerHTML = data[urlParams.get('game')].gameDesc;
    gameImg.setAttribute('src', data[urlParams.get('game')].gameImg);
    gameT.setAttribute('src', data[urlParams.get('game')].gameTrailer);
    let cartGames = JSON.parse(localStorage.getItem('cart-games')) || {};
    document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart-btn')) {
        let gameToBeAdded = {
            gameName: data[urlParams.get('game')].gameName,
            gamePrice: data[urlParams.get('game')].gamePrice,
            gameImage: data[urlParams.get('game')].gameImg,
            gameId: urlParams.get('game'),
        };
        cartGames[urlParams.get('game')] = gameToBeAdded;
        localStorage.setItem('cart-games', JSON.stringify(cartGames));
        document.getElementById('cart-counter').innerHTML = Object.keys(cartGames).length;
        setTimeout(() => {
            alert("The Game Has Been Added To Cart Successfully!");
        }, 0);
    }
    if(e.target.classList.contains('add-to-cart-related')){
        let gameToBeAdded = {
            gameName: e.target.getAttribute('gamename'),
            gamePrice: e.target.getAttribute('gameprice'),
            gameImage: e.target.getAttribute('gameimage'),
            gameId: e.target.getAttribute('gameid'),
        };
        cartGames[e.target.getAttribute('gameid')] = gameToBeAdded;
        localStorage.setItem('cart-games', JSON.stringify(cartGames));
        document.getElementById('cart-counter').innerHTML = Object.keys(cartGames).length;
        alert("The Product Has Been Added To Cart Successfully!");
    }
});
});
