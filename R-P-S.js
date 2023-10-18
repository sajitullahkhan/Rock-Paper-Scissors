//all the commented lines are the lines that I used, to mack this game but after that when I used css to style this game those codes were unnecessary
function click_1(){
    const randomNumber = Math.random();
    // let computerMove = '';
    document.body.style.backgroundColor="rgb(53, 137, 233)";
        if(randomNumber>=0 && randomNumber<1/3){
            // computerMove = 'Rock';
            document.getElementById("h").style.opacity="1";
            document.querySelector(`.score`).innerHTML = `
        <div class="btn l-btn">
            <img class="im" src="r-logo - Copy.jpeg" alt="Rock">
        </div>
        <div class="btn r-btn">
            <img id="rim" class="im" src="r-logo-cR.jpeg" alt="Rock">
        </div>
        <h2>Tie</h2>
        <h5>You</h5>
        <h5 class="c">Com..</h5>`
        }else if (randomNumber>=1/3 && randomNumber<2/3){
            // computerMove = 'Paper';
            document.getElementById("h").style.opacity="1";
            document.querySelector(`.score`).innerHTML = `
        <div class="btn l-btn">
            <img class="im" src="p-logo (2)cP.jpeg" alt="Paper">
        </div>
        <div class="btn r-btn">
            <img id="rim" class="im" src="r-logo-cR.jpeg" alt="Rock">
        </div>
        <h2 class="l">You Lose</h2>
        <h5>You</h5>
        <h5 class="c">Com..</h5>`
        }else{
            // computerMove = 'Scissors';
            document.getElementById("h").style.opacity="1";
            document.querySelector(`.score`).innerHTML = `
        <div class="btn l-btn">
            <img class="im" src="s-logocS.jpeg" alt="Scissors">
        </div>
        <div class="btn r-btn">
            <img id="rim" class="im" src="r-logo-cR.jpeg" alt="Rock">
        </div>
        <h2 id="w" class="l">You Win</h2>
        <h5>You</h5>
        <h5 class="c">Com..</h5>`
        }

        // let result ='';
        // if(computerMove === 'Rock'){
        //     result = 'Tie'
        // }else if(computerMove === 'Paper'){
        //     result = 'You lose'
        // }else if(computerMove === 'Scissors'){
        //     result = 'You Win'
        // }
        
        // alert(`You picked Rock. Computer picked ${computerMove}. ${result}`)
}

function click_2(){
    randomNumber = Math.random();
    // computerMove = '';
    document.body.style.backgroundColor="yellow";
        if(randomNumber>=0 && randomNumber<1/3){
            computerMove = 'Rock';
            document.getElementById("h").style.opacity="1";
            document.querySelector(`.score`).innerHTML = `
        <div class="btn l-btn">
            <img class="im" src="r-logo - Copy.jpeg" alt="Rock">
        </div>
        <div class="btn r-btn">
            <img id="rim" class="im" src="cP.jpeg" alt="Paper">
        </div>
        <h2 id="w" class="l">You Win</h2>
        <h5>You</h5>
        <h5 class="c">Com..</h5>`
        }else if (randomNumber>=1/3 && randomNumber<2/3){
            // computerMove = 'Paper';
            document.getElementById("h").style.opacity="1";
            document.querySelector(`.score`).innerHTML = `
        <div class="btn l-btn">
            <img class="im" src="p-logo (2)cP.jpeg" alt="Rock">
        </div>
        <div class="btn r-btn">
            <img id="rim" class="im" src="cP.jpeg" alt="Rock">
        </div>
        <h2>Tie</h2>
        <h5>You</h5>
        <h5 class="c">Com..</h5>`
        }else{
            // computerMove = 'Scissors';
            document.getElementById("h").style.opacity="1";
            document.querySelector(`.score`).innerHTML = `
        <div class="btn l-btn">
            <img class="im" src="s-logocS.jpeg" alt="Paper">
        </div>
        <div class="btn r-btn">
            <img id="rim" class="im" src="cP.jpeg" alt="Rock">
        </div>
        <h2 class="l">You Lose</h2>
        <h5>You</h5>
        <h5 class="c">Com..</h5>`
        }

        // result ='';
        // if(computerMove === 'Rock'){
        //     result = 'You Win'
        // }else if(computerMove === 'Paper'){
        //     result = 'Tie'
        // }else if(computerMove === 'Scissors'){
        //     result = 'You lose'
        // }
        // alert(`You picked Paper. Computer picked ${computerMove}. ${result}`)
}

function click_3(){
    randomNumber = Math.random();
    computerMove = '';
    document.body.style.backgroundColor="red";
        if(randomNumber>=0 && randomNumber<1/3){
            // computerMove = 'Rock';
            document.getElementById("h").style.opacity="1";
            document.querySelector(`.score`).innerHTML = `
        <div class="btn l-btn">
            <img class="im" src="r-logo - Copy.jpeg" alt="Paper">
        </div>
        <div class="btn r-btn">
            <img id="rim" class="im" src="s-logocS (2).jpeg" alt="Rock">
        </div>
        <h2 class="l">You Lose</h2>
        <h5>You</h5>
        <h5 class="c">Com..</h5>`
        }else if (randomNumber>=1/3 && randomNumber<2/3){
            // computerMove = 'Paper';
            document.getElementById("h").style.opacity="1";
            document.querySelector(`.score`).innerHTML = `
        <div class="btn l-btn">
            <img class="im" src="p-logo (2)cP.jpeg" alt="Rock">
        </div>
        <div class="btn r-btn">
            <img id="rim" class="im" src="s-logocS (2).jpeg" alt="Paper">
        </div>
        <h2 id="w" class="l">You Win</h2>
        <h5>You</h5>
        <h5 class="c">Com..</h5>`
        }else{
            // computerMove = 'Scissors';
            document.getElementById("h").style.opacity="1";
            document.querySelector(`.score`).innerHTML = `
        <div class="btn l-btn">
            <img class="im" src="s-logocS.jpeg" alt="Rock">
        </div>
        <div class="btn r-btn">
            <img id="rim" class="im" src="s-logocS (2).jpeg" alt="Rock">
        </div>
        <h2>Tie</h2>
        <h5>You</h5>
        <h5 class="c">Com..</h5>`
        }

        // result ='';
        // if(computerMove === 'Rock'){
        //     result = 'You lose'
        // }else if(computerMove === 'Paper'){
        //     result = 'You Win'
        // }else if(computerMove === 'Scissors'){
        //     result = 'Tie'
        // }
        // alert(`You picked Scissors. Computer picked ${computerMove}. ${result}`)
}


