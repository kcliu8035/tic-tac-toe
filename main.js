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
    console.log(player1Turn)
    if(player1Turn) {
        e.target.appendChild(xMarker.cloneNode(true))
    } else {
        e.target.appendChild(oMarker.cloneNode(true))
    }
}

