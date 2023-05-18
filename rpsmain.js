const buttons = document.querySelectorAll('button');
const lastSelection = document.querySelector('.lastSelection')
const score = document.querySelector('.score')

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random()*3)]       
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return 'You tied!'
    } else {
        if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
            return 'You win!'
        } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
            return 'You lose!'
        } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
            return 'You win!'
        } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
            return 'You lose!'
        } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
            return 'You win!'
        } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
            return 'You lose!'
        }
    }
}
let playerCount = 0;
let compCount = 0;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let computerSelection = getComputerChoice()
        console.log(computerSelection)
        currSelection = button.classList;
        lastSelection.textContent = currSelection;
        console.log(button.classList[0])
        //console.log(playRound(button.classList[0], computerSelection))
        let result = playRound(button.classList[0], computerSelection)
        if (result === 'You win!') {
            playerCount++
        } else if (result === 'You lose!') {
            compCount++
        }

        score.textContent = playerCount + ' : ' + compCount;
        console.log(playerCount)
        if (playerCount >= 5 && compCount < playerCount) {
            score.textContent = 'You won!'
            console.log('Entered')
        } else if (compCount >= 5 && playerCount < compCount) {
            score.textContent = 'You lost!'
        }
    })
})

