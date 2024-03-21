 function playRound(userChoice){  
    
   function getComputerChoice() {
        const choices = ['rock', 'paper','scissors'];
        let randomIndex = Math.floor(Math.random() * choices.length);
        let randomChoice = choices[randomIndex];
        
        return randomChoice;
    }

    let computerChoice = getComputerChoice();
    let playArea = document.querySelector('#playArea');

    console.log('User: '+ userChoice);
    console.log('Computer: '+ computerChoice);



    

    if(userChoice === computerChoice){
        let tie = document.createElement('p');
        tie.textContent='Uh oh! Its a tie';
        tie.classList.add('choose');
        playArea.removeChild(playArea.children[2]);
        playArea.appendChild(tie);
        round +=1; 
    }
    else{
        if(userChoice === 'rock'){
            if(computerChoice === 'scissors'){
                let statement = document.createElement('p');
                statement.textContent = `
                You won! ${userChoice} beats ${computerChoice}.`;
                statement.classList.add('choose');
                playArea.removeChild(playArea.children[2]);
                playArea.appendChild(statement);
                userWins += 1;
                round +=1;
            }
            else{
                let statement = document.createElement('p');
                statement.textContent =`
                You lost! ${computerChoice} beats ${userChoice}.`;
                statement.classList.add('choose');
                playArea.removeChild(playArea.children[2]);
                playArea.appendChild(statement);
                computerWins += 1;
                round +=1;
            }
        }
        else if(userChoice === 'scissors'){
            if(computerChoice === 'paper'){
                let statement = document.createElement('p');
                statement.textContent = `
                You won! ${userChoice} beats ${computerChoice}.`;
                statement.classList.add('choose');
                playArea.removeChild(playArea.children[2]);
                playArea.appendChild(statement);
                userWins += 1;
                round +=1;
            }
            else{
                let statement = document.createElement('p');
                statement.textContent =`
                You lost! ${computerChoice} beats ${userChoice}.`;
                statement.classList.add('choose');
                playArea.removeChild(playArea.children[2]);
                playArea.appendChild(statement);   
                computerWins += 1;
                round +=1; 
            }   
        }
        else if(userChoice === 'paper'){
            if(computerChoice === 'rock'){
                let statement = document.createElement('p');
                statement.textContent = `
                You won! ${userChoice} beats ${computerChoice}.`;
                statement.classList.add('choose');
                playArea.removeChild(playArea.children[2]);
                playArea.appendChild(statement);
                userWins += 1;
                round +=1;
            }
            else{
                let statement = document.createElement('p');
                statement.textContent =`
                You lost! ${computerChoice} beats ${userChoice}.`;
                statement.classList.add('choose');
                playArea.removeChild(playArea.children[2]);
                playArea.appendChild(statement);
                computerWins += 1;
                round +=1;
            }

        }
    }
}

let choices = document.querySelector('#choices');

choices.addEventListener('click',(e)=>{
    let target = e.target;
    let userChoice;

    switch(target.id){
        case 'rock':
            userChoice='rock';
            playRound(userChoice);
            break;
        case 'paper':
            userChoice='paper';
            playRound(userChoice);
            break;
        case 'scissors':
            userChoice='scissors';
            playRound(userChoice);
            break;
    }
})

// let userWins=0;
// let computerWins=0;
// let round=0;

// while(round<5){
//     playRound();
// }
// console.log('FINAL SCORE');
// console.log('User: '+ userWins);
// console.log('Computer: '+ computerWins);

// if (userWins === computerWins){
// console.log("It's a tie!")
// }
// else{
//     if(userWins > computerWins){
//         console.log('The User has won!!');
//     }
//     else{
//         console.log('The Computer has won!!');
//     }
// }


