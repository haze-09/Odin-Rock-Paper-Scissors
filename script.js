function getComputerChoice() {
    const choices = ['rock', 'paper','scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let randomChoice = choices[randomIndex];
    console.log('Computer: '+ randomChoice);
    
    return randomChoice;
}

function getUserChoice(){
    let userChoice=prompt('choose');
    userChoice = userChoice.toLowerCase();

    if(userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors'){
        console.log('User: '+ userChoice);
        return userChoice;
    }
    else{
        console.log('incorrect choice :(');
        console.log('Choose between rock, paper and scissors.');
        getUserChoice();
    }
    
}

let userChoice= getUserChoice();

let computerChoice = getComputerChoice();

if(userChoice === computerChoice){
    console.log('Uh oh! Its a tie');
}
else{
    if(userChoice === 'rock'){
        if(computerChoice === 'scissors'){
            console.log('You won! '+ userChoice + ' beats ' + computerChoice + '.');
        }
        else{
            console.log('You lost :( ! '+ computerChoice + ' beats ' + userChoice + '.');
        }
    }
    else if(userChoice === 'scissors'){
        if(computerChoice === 'paper'){
            console.log('You won! '+ userChoice + ' beats ' + computerChoice + '.');
        }
        else{
            console.log('You lost :( ! '+ computerChoice + ' beats ' + userChoice + '.');    
        }   
    }
    else if(userChoice === 'paper'){
        if(computerChoice === 'rock'){
            console.log('You won! '+ userChoice + ' beats ' + computerChoice + '.');
        }
        else{
            console.log('You lost :( ! '+ computerChoice + ' beats ' + userChoice + '.');
        }

    }
}
