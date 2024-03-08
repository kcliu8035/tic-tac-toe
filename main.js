const board = document.querySelector('.board');
const squares = document.querySelectorAll('.square');
const restartBTN = document.getElementById('restart');
let player1ScoreDisplay = document.getElementById('player1');
let player2ScoreDisplay = document.getElementById('player2');
let player1Turn = false;
////////MARKER IMAGES//////
const oMarker = new Image()
oMarker.src = 'oMarker.png';
const xMarker = new Image()
xMarker.src = 'xMarker.png';
///////////////////////////
let player1Score = 0
let player2Score = 0 
squares.forEach(square => square.addEventListener('click', checkSquares, {once:true}))

function checkSquares(e) {
    player1Turn = !player1Turn;
    if(player1Turn) {
        e.target.appendChild(xMarker.cloneNode(true))
        e.target.id = 'X'
    } else {
        e.target.appendChild(oMarker.cloneNode(true))
        e.target.id = 'O'
    }
    checkWinner();
}

function checkWinner() {
    
    const winningConditions = [
        //HORIZONTAL
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        //VERTICAL
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        //DIAGONAL
        [0, 4, 8],
        [2, 4, 6]
    ]

   for (const iteration of winningConditions) {
        const[a, b, c] = iteration 
        if(squares[a].id === "X" && squares[b].id === "X" && squares[c].id === "X") {
            gameOver("Player 1 Wins!")
            player1Score++ 
            player1ScoreDisplay.innerHTML = `Player 1: ${player1Score}`;
        } else if (squares[a].id === "O" && squares[b].id === "O" && squares[c].id === "O") {
            gameOver('Player 2 Wins!')
            player2Score++ 
            player2ScoreDisplay.innerHTML = `Player 2: ${player2Score}`;
        }
        
   }
}

function gameOver(message) {
    if(player1Turn) {
        alert(message);
    } else {
        alert(message)
    }
    squares.forEach(square => square.removeEventListener('click', checkSquares))
}

restartBTN.addEventListener('click', () => {
    player1Turn = false
    squares.forEach(square => {
        square.innerHTML = ''
        square.id = ''
    })
    squares.forEach(square => {
        square.removeEventListener('click', checkSquares, { once: true });
        square.addEventListener('click', checkSquares, { once: true });
    });
}) 