const moves = ["Rock", "Paper", "Scissors"];

game();

function game(){
    let humanScore = 0;
    for (let i = 0; i < 5; i++ ){
        let playerSelection = humanPlay();
        let computerSelection = computerPlay();

        let result = playRound(playerSelection, computerSelection);
        console.log(`Round ${i}: ` + result);
        if (result.includes("won")) humanScore++;
        if (result.includes("drew")) humanScore += 0.5;
    }
    
    console.log(`Game ended. You got ${humanScore} points!`);

    if (humanScore == 2.5)
        console.log("DRAW :|")
    else if (humanScore > 2.5)
        console.log("You won buddy!!! :)");
    else 
        console.log("Nice try pissbaby :(");      
}


function playRound(playerSelection, computerSelection){
    let playerIndex = moves.indexOf(playerSelection);
    let compIndex = moves.indexOf(computerSelection);
    let indexDiff = playerIndex - compIndex;
    if (indexDiff < 0) indexDiff += 3;

    if (indexDiff === 0) {
        return `You drew!!! Both threw ${playerSelection}`;
    } else if (indexDiff === 1) {
        return `You won!!! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lost!!! ${playerSelection} loses to ${computerSelection}`;
    }
}




function computerPlay(){
    let ranInt = randomInt(0,2);
    return moves[ranInt];
}

function humanPlay(){
    while (true) {
        let move = prompt("What doya wanna play?");
        if(!move) {
            alert("No move selected");
            continue;
        }
    
        move = capitalise(move.toLowerCase());
        if (moves.includes(move)) 
            return move;
        else 
            alert("Invalid move");      
    }
}

function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Capitalise first letter of str
function capitalise(str){
    return str === "" ? str : str[0].toUpperCase() + str.slice(1);
}