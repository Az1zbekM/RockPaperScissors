    let score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            losses: 0,
            ties: 0
        };
         
        updateScoreElement();
   
         // first way

        // if (score === null) {
        //     score = {
        //         wins: 0,
        //         losses: 0,
        //         ties: 0
        //     }
        // };

        // second way

        //  if (!score) {
        //     score = {
        //         wins: 0,
        //         losses: 0,
        //         ties: 0
        //     }
        // };

function playGame(playerMove) {
            
    pickComputer();

let result = ''
if (playerMove === 'scissors') {
if (computerMove === 'rock') {
result = 'You lose';
} else if (computerMove === 'paper'){
result = 'You won';
} else if (computerMove === 'scissors'){
result = 'Ties';
}
} else if (playerMove === 'rock'){
if (computerMove === 'rock') {
result = 'Ties';
} else if (computerMove === 'paper'){
result = 'You lose';
} else if (computerMove === 'scissors'){
result = 'You won';
}
} else if(playerMove === 'paper') {
if (computerMove === 'rock') {
result = 'You won';
} else if (computerMove === 'paper'){
result = 'Ties';}
 else if (computerMove === 'scissors'){
result = 'You lose';
}
}

if (result === 'You won') {
    score.wins += 1;
} else if(result === 'You lose') {
    score.losses += 1;
} else if(result === 'Ties') {
    score.ties += 1;
};

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = ` You. 
            <img class="imgst" src="images/${playerMove}-emoji.png" alt="">
            <img class="imgst" src="images/${computerMove}-emoji.png" alt="">
            Comp.`;



    // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
    // Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
    };

function updateScoreElement() {
     document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} | Losses: ${score.losses} | Ties: ${score.ties}`
};

let computerMove = '';

function pickComputer() {
    const randomNum = Math.random();



if (randomNum >= 0 && randomNum < 1/3) {
computerMove = 'rock';
} else if (randomNum >= 1/3 && randomNum < 2/3 ) {
computerMove = 'paper';
} else if(randomNum >= 2/3 && randomNum < 1) {
computerMove = 'scissors';
}
};

 function subscribe() {
const buttonElement = document.querySelector('.btny');
    if (buttonElement.innerText === 'Clear') {
        buttonElement.innerHTML = 'Cleared';
    } else{
        buttonElement.innerHTML = 'Clear';
    }
       };           