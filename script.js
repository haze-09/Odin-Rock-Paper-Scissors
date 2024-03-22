 function playRound(userChoice){  
    
   function getComputerChoice() {
        const choices = ['rock', 'paper','scissors'];
        let randomIndex = Math.floor(Math.random() * choices.length);
        let randomChoice = choices[randomIndex];
        
        return randomChoice;
    }

    function winText(){
        let statement = document.createElement('p');
        statement.textContent = `
        You won! ${userChoice} beats ${computerChoice}.`;
        statement.classList.add('choose');
        playArea.removeChild(playArea.children[2]);
        playArea.appendChild(statement);
        userWins += 1;
        round +=1;
    }

    function loseText(){
        let statement = document.createElement('p');
        statement.textContent =`
        You lost! ${computerChoice} beats ${userChoice}.`;
        statement.classList.add('choose');
        playArea.removeChild(playArea.children[2]);
        playArea.appendChild(statement);
        computerWins += 1;
        round +=1;
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
                winText();
                
            }
            else{
                loseText();
                
            }
        }
        else if(userChoice === 'scissors'){
            if(computerChoice === 'paper'){
                winText()
            }
            else{
                loseText();
            }   
        }
        else if(userChoice === 'paper'){
            if(computerChoice === 'rock'){
                winText();
            }
            else{
                loseText();
            }

        }
    }
}

function refresh(){
    let playAgain = document.createElement('button');
    playAgain.textContent='Play again?';
    playAgain.addEventListener('click',()=>{
        window.location.reload();
    })
    playArea.removeChild(playArea.children[2]);                
    playArea.appendChild(playAgain);
    

}


let userWins=0;
let computerWins=0;
let round=0;
let display = document.querySelector('#welcome');
let choices = document.querySelector('#choices');
let player = document.querySelector('#player');
let computer = document.querySelector('#computer');

let gameEnded = false;

choices.addEventListener('click',(e)=>{
    let target = e.target;
    let userChoice;
    if (gameEnded) return;

    switch(target.id){
        case 'rock':
            userChoice='rock';
            playRound(userChoice);
            display.textContent=`Round ${round}`;
            player.textContent=`Player: ${userWins}`;
            computer.textContent=`Computer: ${computerWins}`;
            break;
        case 'paper':
            userChoice='paper';
            playRound(userChoice);
            display.textContent=`Round ${round}`;
            player.textContent=`Player: ${userWins}`;
            computer.textContent=`Computer: ${computerWins}`;
            break;
        case 'scissors':
            userChoice='scissors';
            playRound(userChoice);
            display.textContent=`Round ${round}`;
            player.textContent=`Player: ${userWins}`;
            computer.textContent=`Computer: ${computerWins}`;
            break;
    }
    
    if(round === 5){
        gameEnded = true;

        let seeResult = document.createElement('button')
        seeResult.textContent = 'Check results';                      
        playArea.appendChild(seeResult);

        seeResult.addEventListener('click',()=>{
            playArea.removeChild(playArea.children[2]);      
            if (userWins === computerWins){
                display.textContent="It's a tie!";
                refresh();
            }
               
            else{
                if(userWins > computerWins){
                    display.textContent='The User has won!!';
                    refresh();
                 }
                else{
                    display.textContent='The Computer has won!!';
                    refresh();
                }
            }
        });

       
                  
                
        

    }
    

})



    


console.log('FINAL SCORE');
console.log('User: '+ userWins);
console.log('Computer: '+ computerWins);



