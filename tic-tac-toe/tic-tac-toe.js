// Tic Tac Toe Game
const gameBoard = (() => {
    const size = 3
    const _board = Array(size**2).fill('');

    const getTile = (pos) => {
        return _board[pos];
    };
    const setTile = (pos, player) =>{
        _board[pos] = player.getMarker();
    };
    const resetGame = () => {
        for (let i = 0; i < _board.length; i++){
            _board[i] = '';
        }
    };

    const checkWin = (pos, player) => {
        const marker = player.getMarker();
        const row = Math.floor(pos / size);
        const col = pos % size;

        const equalMarker = (tile) => tile === marker;

        const rowTiles = slice(_board, row * size, (row + 1) * size);
        const columnTiles = slice(_board, col, _board.length, size);
        const rightDiagonalTiles = slice(_board, 0, _board.length, size + 1);
        const leftDiagonalTiles = slice(_board, size - 1, _board.length - 1, size - 1);
        
        if (rowTiles.every(equalMarker) || columnTiles.every(equalMarker) || rightDiagonalTiles.every(equalMarker) || leftDiagonalTiles.every(equalMarker)){
            return true;
        }
        return false;
    }

    const checkFullBoard = () => {
        for (let i = 0; i < _board.length; i++){
            if (_board[i] === ''){
                return false;
            }
        }
        return true;
    };

    return {getTile, setTile, resetGame, checkFullBoard, checkWin, _board};
})();

const Player = (name, marker) => {
    const getName = () => name; 
    const getMarker = () => marker;
    return { getName, getMarker};
}

function slice(array, start, end, step = 1){
    const sliced = [];
    for (let i = start; i < end; i += step){
        sliced.push(array[i]);
    }
    return sliced;
}

//
// DOM Manipulation and game control
const boardDiv = document.querySelector("#board");
const tileButtons = boardDiv.querySelectorAll('.tile');
const resetButton = document.querySelector('#reset');
const nameDialog = document.querySelector('#name-dialog');
const startButton = nameDialog.querySelector('#start');

// Default names
let player1 = Player('Player 1', 'X');
let player2 = Player('Player 2', 'O');
let currentPlayer = player1;

// User submitted names
nameDialog.addEventListener('submit', (event) => {
    const player1Name = document.getElementById('player1');
    const player2Name = document.getElementById('player2');

    if (!player1.value.trim() || !player2.value.trim()){ 
      event.preventDefault(); // stop the dialog from closing
      alert('Please fill out the both player names');
    } else {
        player1 = Player(player1Name.value, 'X');
        player2 = Player(player2Name.value, 'O');
        currentPlayer = player1;
        nameDialog.close();
    }
});
nameDialog.showModal(); // is not blocking the background 


resetButton.addEventListener('click', () => {
    tileButtons.forEach((button) => {
        button.innerText = '';
        button.disabled = false;
    });

    gameBoard.resetGame();
    currentPlayer = player1;
});

tileButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (gameBoard.getTile(index) === ''){
            button.innerText = currentPlayer.getMarker();
            button.disabled = true;

            currentPlayerMakeMove(index);
            switchPlayer();
        }
    });
});

function currentPlayerMakeMove(pos){
    gameBoard.setTile(pos, currentPlayer);

    if (gameBoard.checkWin(pos, currentPlayer)){
        alert(`${currentPlayer.getName()} wins!`);
        tileButtons.forEach((button) => {
            button.disabled = true;
        });
        return;
    }
    if (gameBoard.checkFullBoard()){
        alert('It\'s a tie!');
        return;
    }
}

function switchPlayer(){
    currentPlayer = currentPlayer === player1 ? player2 : player1;
}


