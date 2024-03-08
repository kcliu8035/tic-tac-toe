const board = document.querySelector('.board');
const squares = document.querySelectorAll('.square');
const resetBTN = document.getElementById('reset');
const player1Score = document.getElementById('player1');
const player2Score = document.getElementById('player2');
let player1Turn = false;
////////MARKER IMAGES//////
const oMarker = new Image()
oMarker.src = 'oMarker.png';
const xMarker = new Image()
xMarker.src = 'xMarker.png';
///////////////////////////

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
        } else if (squares[a].id === "O" && squares[b].id === "O" && squares[c].id === "O") {
            gameOver('Player 2 Wins!')
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
