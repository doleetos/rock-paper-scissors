const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

const rockImg = document.getElementById('rock-image');
const paperImg = document.getElementById('paper-image');
const scissorsImg = document.getElementById('scissors-image');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = `<img id="${userChoice}-image" src="images/${userChoice}-image.png" alt="${computerChoice} image">`;

    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
    if (randomNumber === 1) {
        computerChoice =  'rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'paper';
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors';
    }
    
    computerChoiceDisplay.innerHTML = `<img id="${computerChoice}-image" src="images/${computerChoice}-image.png" alt="${computerChoice} image">`;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!";
    }
    else if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "You won! 🎊";
    }
    else if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = "You won! 🎊";
    }
    else if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = "You won! 🎊";
    }
    else {
        result = "You lose 😔";
    }

    resultDisplay.innerHTML = result;

}

