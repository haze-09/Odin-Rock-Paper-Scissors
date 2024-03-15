function getComputerChoice() {
    const choices = ['rock', 'paper','scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let randomChoice = choices[randomIndex];
    return randomChoice;
}

let computerChoice = getComputerChoice();
// console.log(computerChoice);

