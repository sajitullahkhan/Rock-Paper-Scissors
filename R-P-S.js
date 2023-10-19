//all the commented lines are the lines that I used, to mack this game but after that when I used css to style this game those codes were unnecessary
function visible(){let hid = document.getElementById("hidden").style.opacity="1";}
function click_1(){
    const randomNumber = Math.random();
    // let computerMove = '';
    document.body.style.backgroundColor="rgb(53, 137, 233)";
        if(randomNumber>=0 && randomNumber<1/3){
            // computerMove = 'Rock';
            visible();
            document.querySelector(`.score`).innerHTML = `
        <div class="btn l-btn">
            <img class="im" src="r-logo - Copy.jpeg" alt="Rock">
        </div>
        <div class="btn r-btn">
            <img id="rim" class="im" src="r-logo-cR.jpeg" alt="Rock">
        </div>
        <h1 id="tie">Tie</h1>
        <h3>You</h3>
        <h3 class="com_Move">Computer</h3>`
        }else if (randomNumber>=1/3 && randomNumber<2/3){
            // computerMove = 'Paper';
            visible();
            document.querySelector(`.score`).innerHTML = `
        <div class="btn l-btn">
            <img class="im" src="p-logo (2)cP.jpeg" alt="Paper">
        </div>
        <div class="btn r-btn">
            <img id="rim" class="im" src="r-logo-cR.jpeg" alt="Rock">
        </div>
        <h1 id="lose">You Lose</h1>
        <h3>You</h3>
        <h3 class="com_Move">Computer</h3>`
        }else{
            // computerMove = 'Scissors';
            visible();
            document.querySelector(`.score`).innerHTML = `
        <div class="btn l-btn">
            <img class="im" src="s-logocS.jpeg" alt="Scissors">
        </div>
        <div class="btn r-btn">
            <img id="rim" class="im" src="r-logo-cR.jpeg" alt="Rock">
        </div>
        <h1 id="win">You Win</h1>
        <h3>You</h3>
        <h3 class="com_Move">Computer</h3>`
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
            visible();
            document.querySelector(`.score`).innerHTML = `
        <div class="btn l-btn">
            <img class="im" src="r-logo - Copy.jpeg" alt="Rock">
        </div>
        <div class="btn r-btn">
            <img id="rim" class="im" src="cP.jpeg" alt="Paper">
        </div>
        <h1 id="win">You Win</h1>
        <h3>You</h3>
        <h3 class="com_Move">Computer</h3>`
        }else if (randomNumber>=1/3 && randomNumber<2/3){
            // computerMove = 'Paper';
            visible();
            document.querySelector(`.score`).innerHTML = `
        <div class="btn l-btn">
            <img class="im" src="p-logo (2)cP.jpeg" alt="Rock">
        </div>
        <div class="btn r-btn">
            <img id="rim" class="im" src="cP.jpeg" alt="Rock">
        </div>
        <h1 id="tie">Tie</h1>
        <h3>You</h3>
        <h3 class="com_Move">Computer</h3>`
        }else{
            // computerMove = 'Scissors';
            visible();
            document.querySelector(`.score`).innerHTML = `
        <div class="btn l-btn">
            <img class="im" src="s-logocS.jpeg" alt="Paper">
        </div>
        <div class="btn r-btn">
            <img id="rim" class="im" src="cP.jpeg" alt="Rock">
        </div>
        <h1 id="lose">You Lose</h1>
        <h3>You</h3>
        <h3 class="com_Move">Computer</h3>`
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
            visible();
            document.querySelector(`.score`).innerHTML = `
        <div class="btn l-btn">
            <img class="im" src="r-logo - Copy.jpeg" alt="Paper">
        </div>
        <div class="btn r-btn">
            <img id="rim" class="im" src="s-logocS (2).jpeg" alt="Rock">
        </div>
        <h1 id="lose">You Lose</h1>
        <h3>You</h3>
        <h3 class="com_Move">Computer</h3>`
        }else if (randomNumber>=1/3 && randomNumber<2/3){
            // computerMove = 'Paper';
            visible();
            document.querySelector(`.score`).innerHTML = `
        <div class="btn l-btn">
            <img class="im" src="p-logo (2)cP.jpeg" alt="Rock">
        </div>
        <div class="btn r-btn">
            <img id="rim" class="im" src="s-logocS (2).jpeg" alt="Paper">
        </div>
        <h1 id="win">You Win</h1>
        <h3>You</h3>
        <h3 class="com_Move">Computer</h3>`
        }else{
            // computerMove = 'Scissors';
            visible();
            document.querySelector(`.score`).innerHTML = `
        <div class="btn l-btn">
            <img class="im" src="s-logocS.jpeg" alt="Rock">
        </div>
        <div class="btn r-btn">
            <img id="rim" class="im" src="s-logocS (2).jpeg" alt="Rock">
        </div>
        <h1 id="tie">Tie</h1>
        <h3>You</h3>
        <h3 class="com_Move">Computer</h3>`
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


