const computerChoiceDisplay = document.getElementById('computerChoice')
const userChoiceDisplay = document.getElementById('userChoice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')
let userChoice,computerChoice,result
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice.toUpperCase()
    genrateComputerChoice()
    getResult()
}));

function genrateComputerChoice() {
    randomChoice = Math.floor( Math.random() * possibleChoices.length) + 1 
    if(randomChoice === 1) {
        computerChoice = 'rock'
    }
    if(randomChoice === 2) {
        computerChoice = 'paper'
    }
    if(randomChoice === 3) {
        computerChoice = 'scissor'
    }

    computerChoiceDisplay.innerHTML = computerChoice.toUpperCase()
}

function getResult() {
    if(userChoice === computerChoice) {
        result = "It's a draw!";
    } 
    if(userChoice === 'paper' && computerChoice === 'rock') {
        result = "you win!";
    }
    if(userChoice === 'paper' && computerChoice === 'scissor') {
        result = "you lost!";
    }
    if(userChoice === 'rock' && computerChoice === 'scissor') {
        result = "you win";
    }
    if(userChoice === 'rock' && computerChoice === 'paper') {
        result = "you lost!";
    }
    if(userChoice === 'scissor' && computerChoice === 'paper') {
        result = "you win";
    }
    if(userChoice === 'scissor' && computerChoice === 'rock') {
        result = "you lost!";
    }
    if(userChoice === 'paper' && computerChoice === 'rock') {
        result = "you win";
    }
    if(userChoice === 'paper' && computerChoice === 'rock') {
        result = "you win";
    }
    if(userChoice === 'paper' && computerChoice === 'rock') {
        result = "you win";
    }
    if(userChoice === 'paper' && computerChoice === 'rock') {
        result = "you win";
    }
    resultDisplay.innerHTML = result
}