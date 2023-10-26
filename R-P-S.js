let scores = {
    Win: 0,
    Lose: 0,
    Tie: 0
}
function click_1() {
    const randomNumber = Math.random();
    document.body.style.backgroundColor = "rgb(53, 137, 233)";
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        scores.Tie += 1;
        document.querySelector(`.l-btn`).innerHTML = `
            <img class="im" src="r-logo - Copy.jpeg" alt="Rock">`
        document.querySelector(`.r-btn`).innerHTML = `
            <img id="rim" class="im" src="r-logo-cR.jpeg" alt="Rock">`
        document.querySelector(`.t`).innerHTML = scores.Tie;
        document.getElementById(`wlt`).innerHTML = `<h1 id="tie">Tie</h1>`;
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        scores.Lose += 1;
        document.querySelector(`.l-btn`).innerHTML = `
            <img class="im" src="p-logo (2)cP.jpeg" alt="Paper">`
        document.querySelector(`.r-btn`).innerHTML = `
            <img id="rim" class="im" src="r-logo-cR.jpeg" alt="Rock">`
        document.querySelector(`.l`).innerHTML = scores.Lose;
        document.getElementById(`wlt`).innerHTML = `<h1 id="lose">You Lose</h1>`;
    } else {
        scores.Win += 1;
        document.querySelector(`.l-btn`).innerHTML = `
            <img class="im" src="s-logocS.jpeg" alt="Scissors">`

        document.querySelector(`.r-btn`).innerHTML = `
            <img id="rim" class="im" src="r-logo-cR.jpeg" alt="Rock">`
        document.querySelector(`.w`).innerHTML = scores.Win;
        document.getElementById(`wlt`).innerHTML = `<h1 id="win">You Win</h1>`;
    }
}

function click_2() {
    const randomNumber = Math.random();
    document.body.style.backgroundColor = "yellow";
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        scores.Win += 1;
        document.querySelector(`.l-btn`).innerHTML = `
            <img class="im" src="r-logo - Copy.jpeg" alt="Rock">`
        document.querySelector(`.r-btn`).innerHTML = `
            <img id="rim" class="im" src="cP.jpeg" alt="Paper">`
        document.querySelector(`.w`).innerHTML = scores.Win;
        document.getElementById(`wlt`).innerHTML = `<h1 id="win">You Win</h1>`;
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        scores.Tie += 1;
        document.querySelector(`.l-btn`).innerHTML = `
            <img class="im" src="p-logo (2)cP.jpeg" alt="Paper">`
        document.querySelector(`.r-btn`).innerHTML = `
            <img id="rim" class="im" src="cP.jpeg" alt="Paper">`
        document.querySelector(`.t`).innerHTML = scores.Tie;
        document.getElementById(`wlt`).innerHTML = `<h1 id="tie">Tie</h1>`;
    } else {
        scores.Lose += 1;
        document.querySelector(`.l-btn`).innerHTML = `
            <img class="im" src="s-logocS.jpeg" alt="Scissors">`

        document.querySelector(`.r-btn`).innerHTML = `
        <img id="rim" class="im" src="cP.jpeg" alt="Paper">`
        document.querySelector(`.l`).innerHTML = scores.Lose;
        document.getElementById(`wlt`).innerHTML = `<h1 id="lose">You Lose</h1>`;
    }
}

function click_3() {
    const randomNumber = Math.random();
    document.body.style.backgroundColor = "red";
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        scores.Lose += 1;
        document.querySelector(`.l-btn`).innerHTML = `
            <img class="im" src="r-logo - Copy.jpeg" alt="Rock">`
        document.querySelector(`.r-btn`).innerHTML = `
            <img id="rim" class="im" src="s-logocS (2).jpeg" alt="Scissors">`
        document.querySelector(`.l`).innerHTML = scores.Lose;
        document.getElementById(`wlt`).innerHTML = `<h1 id="lose">You Lose</h1>`;
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        scores.Win += 1;
        document.querySelector(`.l-btn`).innerHTML = `
        <img class="im" src="p-logo (2)cP.jpeg" alt="Paper">`
        document.querySelector(`.r-btn`).innerHTML = `
        <img id="rim" class="im" src="s-logocS (2).jpeg" alt="Scissors">`
        document.querySelector(`.w`).innerHTML = scores.Win;
        document.getElementById(`wlt`).innerHTML = `<h1 id="win">You Win</h1>`;
    } else {
        scores.Tie += 1;
        document.querySelector(`.l-btn`).innerHTML = `
            <img class="im" src="s-logocS.jpeg" alt="Scissors">`

        document.querySelector(`.r-btn`).innerHTML = `
        <img id="rim" class="im" src="s-logocS (2).jpeg" alt="Scissors">`
        document.querySelector(`.t`).innerHTML = scores.Tie;
        document.getElementById(`wlt`).innerHTML = `<h1 id="tie">Tie</h1>`;
    }
}

function reset_click(){
    document.querySelector(`.l-btn`).innerHTML =``
    document.querySelector(`.r-btn`).innerHTML =``
    document.getElementById(`wlt`).innerHTML =``
    scores.Win= 0;
    scores.Lose= 0;
    scores.Tie= 0;
    document.querySelector(`.w`).innerHTML = scores.Win;
    document.querySelector(`.l`).innerHTML = scores.Lose;
    document.querySelector(`.t`).innerHTML = scores.Tie;
}

