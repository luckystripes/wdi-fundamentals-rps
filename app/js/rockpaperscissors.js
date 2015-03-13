////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();


}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
  
}



function getWinner(playerMove,computerMove) {
    var winner;

    if((playerMove==="rock"&&computerMove==="scissors")||(playerMove==="scissors"&&computerMove==="paper")||(playerMove==="paper"&&computerMove==="rock")){
        winner="player";
    }else if((playerMove==="scissors"&&computerMove==="rock")||(playerMove==="paper"&&computerMove==="scissors")||(playerMove==="rock"&&computerMove==="paper")){
        winner="computer";
    } 
    else{
        winner="tie";
    }
    return winner;
}


function playToFive() {
    
    var playerWins=0;
    var computerWins=0;
    
    while(playerWins<5&&computerWins<5){
        var player = getPlayerMove();
        var computer = getComputerMove();
        var winner = getWinner(player, computer);
    
        
        if(winner==="player"){
            playerWins+=1;
        }else if(winner==="computer"){
            computerWins+=1;
        }
        
    // if(playerWins===5||computerWins===5){
    //     return [playerWins, computerWins];
        
    // }
        console.log("Player chose " + player + " " + "while Computer chose " + computer + ".");
        console.log("The score is Player : " + " " + playerWins + " " + "and Computer : " + computerWins + ".");
        console.log("Winner is" + " " + winner);
    }
        return [playerWins, computerWins];
    // ends while loop
    
}//ends function

playToFive();