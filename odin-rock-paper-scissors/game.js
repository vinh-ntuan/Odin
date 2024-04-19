const moves = ["rock", "paper", "scissors"];
let player_options = document.getElementById("player-options");
let buttons = player_options.querySelectorAll("#player-options > button");
let round_result_div = document.getElementById("round-result");
let human_score_div = document.getElementById("human-score");
let computer_score_div = document.getElementById("computer-score");
let computer_select_div = document.getElementById("computer-selection")
let human_score = 0;
let computer_score = 0;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log(button.id);
        play_round(button.id);
    })
});



function play_round(player_selection){
    let computer_selection = computerPlay();
    computer_select_div.innerText = `Computer played ${computer_selection}`;
    let result = get_result(player_selection, computer_selection);
    update(result);
    display_winner();
}

function get_result(player_selection, computer_selection){
    let playerIndex = moves.indexOf(player_selection);
    let compIndex = moves.indexOf(computer_selection);
    let indexDiff = playerIndex - compIndex;
    if (indexDiff < 0) indexDiff += 3;

    return indexDiff;
}

function update(round_result){
    if (round_result === 0) {
        round_result_div.innerText = "You drew";
    } else if (round_result === 1) {
        round_result_div.innerText = "You won !";
        human_score += 1;
    } else {
        round_result_div.innerText = "You lost Bozo";
        computer_score += 1;
    }
    computer_score_div.innerText = `Computer score is: ${computer_score}`;
    human_score_div.innerText = `Your score is: ${human_score}`;
}

function display_winner(){
    if (human_score === 5) {
        reset();
        alert("Human won !");
    } else if (computer_score === 5) {
        reset();
        alert("Computer won ! Blehh");
    }
}

function reset(){
    human_score = 0;
    computer_score = 0;
}


function computerPlay(){
    let ranInt = randomInt(0,2);
    return moves[ranInt];
}


function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Capitalise first letter of str
function capitalise(str){
    return str === "" ? str : str[0].toUpperCase() + str.slice(1);
}