const yourChoice = document.querySelector("#your-choice");
const comChoice = document.querySelector("#computer-choice");
const winerResult = document.querySelector("#result");
const choices = document.querySelectorAll('.choices');
const you = document.querySelector("#you");
const device = document.querySelector("#computer");

let player;
let computer;
let result;

let yourScore = 1;
let computerScore= 1;


choices.forEach(button => button.addEventListener('click', (e) => {
    player = button.textContent;
    computerChoicesGenerator();

    yourChoice.textContent = `You chosen: ${player}`;
    comChoice.textContent = `Computer chosses: ${computer}`;
    const matchResult = winerGenerator();

    if(matchResult === 'W') {
        winerResult.textContent = 'You Win!';
        you.textContent = "Your Score:" + yourScore ++;  
    } else if (matchResult === 'L'){
        winerResult.textContent = 'You Lose!';
        device.textContent = "Computer Score: " + computerScore ++;
    } else{
        winerResult.textContent = 'Draw!';
    }

})); 


function computerChoicesGenerator() {
    const randNum = Math.floor(Math.random() * choices.length) + 1;
     
    switch(randNum) {
        case 1:
          computer = 'Rock';
          break;
        case 2:
          computer = 'Paper';
          break;
        case 3:
          computer = 'Scissors';
          break;
    }
};


function winerGenerator() {
    if(player === computer) {
        return "D"
    } else if(computer === 'Rock') {
        return (player === "Paper")? "W" : "L" ;
    } else if(computer === "Paper") {
        return (player === "Scissors")? "W" : "L";
    } else if(computer === "Scissors") {
        return (player === "Rock")? "W" : "L";
    }
};
