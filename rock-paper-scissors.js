function playGame(playerMove) {
            
    pickComputer();

let result = ''
if (playerMove === 'scissors') {
if (computerMove === 'rock') {
result = 'You lose.';
} else if (computerMove === 'paper'){
result = 'You won.';
} else if (computerMove === 'scissors'){
result = 'Tie.';
}
} else if (playerMove === 'rock'){
if (computerMove === 'rock') {
result = 'Tie.';
} else if (computerMove === 'paper'){
result = 'You lose.';
} else if (computerMove === 'scissors'){
result = 'You won.';
}
} else if(playerMove === 'paper') {
if (computerMove === 'rock') {
result = 'You won.';
} else if (computerMove === 'paper'){
result = 'Tie.';
} else if (computerMove === 'scissors'){
result = 'You lose.';
}
}

alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);

}

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
}