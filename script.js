 function playRound(){  
    
   function getComputerChoice() {
        const choices = ['rock', 'paper','scissors'];
        let randomIndex = Math.floor(Math.random() * choices.length);
        let randomChoice = choices[randomIndex];
        
        return randomChoice;
    }

    function getUserChoice(){
        let userChoice=prompt('choose');
        userChoice = userChoice.toLowerCase();

        if(userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors'){
            return userChoice;
        }
        else{
            console.log('incorrect choice :(');
            console.log('Choose between rock, paper and scissors.');
            return getUserChoice();
        }        
        
    }

    let userChoice= getUserChoice();
    let computerChoice = getComputerChoice();

    console.log('User: '+ userChoice);
    console.log('Computer: '+ computerChoice);



    

    if(userChoice === computerChoice){
        console.log('Uh oh! Its a tie');
        round +=1; 
    }
    else{
        if(userChoice === 'rock'){
            if(computerChoice === 'scissors'){
                console.log('You won! '+ userChoice + ' beats ' + computerChoice + '.');
                userWins += 1;
                round +=1;
            }
            else{
                console.log('You lost :( ! '+ computerChoice + ' beats ' + userChoice + '.');
                computerWins += 1;
                round +=1;
            }
        }
        else if(userChoice === 'scissors'){
            if(computerChoice === 'paper'){
                console.log('You won! '+ userChoice + ' beats ' + computerChoice + '.');
                userWins += 1;
                round +=1;
            }
            else{
                console.log('You lost :( ! '+ computerChoice + ' beats ' + userChoice + '.');   
                computerWins += 1;
                round +=1; 
            }   
        }
        else if(userChoice === 'paper'){
            if(computerChoice === 'rock'){
                console.log('You won! '+ userChoice + ' beats ' + computerChoice + '.');
                userWins += 1;
                round +=1;
            }
            else{
                console.log('You lost :( ! '+ computerChoice + ' beats ' + userChoice + '.');
                computerWins += 1;
                round +=1;
            }

        }
    }
}

let userWins=0;
let computerWins=0;
let round=0;

while(round<5){
    playRound();
}
console.log('FINAL SCORE');
console.log('User: '+ userWins);
console.log('Computer: '+ computerWins);

if (userWins === computerWins){
console.log("It's a tie!")
}
else{
    if(userWins > computerWins){
        console.log('The User has won!!');
    }
    else{
        console.log('The Computer has won!!');
    }
}


