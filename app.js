const userChoice = document.querySelector("#user-choice");
const comChoice = document.querySelector("#computer-choice");
const winerResult = document.querySelector("#result");
const choices = document.querySelectorAll('.choices');
const user = document.querySelector("#user");
const device = document.querySelector("#computer");

let userScore = 0;
let computerScore= 0;


choices.forEach(button => button.addEventListener('click', (e) => {
    const userInput = button.textContent;
    const computerInput = computerChoicesGenerator();

    userChoice.textContent = `You chosen: ${userInput}`;
    comChoice.textContent = `Computer chosses: ${computerInput}`;
    const matchResult = winnerGenerator(userInput, computerInput);

    if(matchResult === 'win') {
        winerResult.textContent = 'You Win!';
        user.textContent = "Your Score:" +  ++userScore;  
    } else if (matchResult === 'lose'){
        winerResult.textContent = 'You Lose!';
        device.textContent = "Computer Score: " +  ++computerScore;
    } else{
        winerResult.textContent = 'Draw!';
    }

})); 


function computerChoicesGenerator() {
    const randNum = Math.floor(Math.random() * choices.length) + 1;
     
    switch(randNum) {
        case 1:
          return 'Rock';
        case 2:
          return 'Paper';
        case 3:
          return 'Scissors';
    }
};


function winnerGenerator(userInput, computerInput) {
    const gameState = [
        {
            selection: 'Rock',
            'Rock': 'tie',
            'Paper': 'lose',
            'Scissors': 'win'
        },
        {
            selection: 'Paper',
            'Rock': 'win',
            'Paper': 'tie',
            'Scissors': 'lose'
        },
        {
            selection: 'Scissors',
            'Rock': 'lose',
            'Paper': 'win',
            'Scissors': 'tie'
        }
    ];

    const state = gameState.find(({selection}) => selection === userInput);
    return state[computerInput];
};
