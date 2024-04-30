let searchCounter = document.getElementById('search-count');
let gamesArea = document.querySelector('.games');
const urlParams = new URLSearchParams(window.location.search);
fetch('Games.json').then(results => results.json()).then(data => {
    let gameCnt = 0;
    Object.values(data).forEach(e => {
        if (e.gameName.toLowerCase().includes(urlParams.get('search').toLowerCase())) {
            gameCnt++;
            gamesArea.innerHTML += `
                <a href="game-product-page.html?game=${e.gameID}" class="game-item">
                    <img src="./${e.gameImg}" alt="">
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <h3>${e.gameName}</h3>
                    <span>${e.gamePrice}</span>
                </a>
                `;
            }
    });
    if (!gameCnt) {
        gamesArea.innerHTML = `
        
        <h3 id="no-games"><i class="fa-solid fa-magnifying-glass-minus"></i> Sorry We Couldn't Find Your Game We Will Try To Make It Available Soon.</h2>`
    }
    searchCounter.innerHTML = `${gameCnt} ${gameCnt > 1 ? 'Games': 'Game'} Found`;
});
