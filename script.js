const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(cell => cell.addEventListener('click', cellClicked));

function cellClicked(event) {
    const cellIndex = event.target.getAttribute('data-index');

    if (gameState[cellIndex] !== '' || checkWin()) {
        return;
    }

    gameState[cellIndex] = currentPlayer;
    event.target.innerHTML = currentPlayer;

    if (checkWin()) {
        statusText.innerHTML = `Player ${currentPlayer} wins!`;
    } else if (!gameState.includes('')) {
        statusText.innerHTML = 'Draw!';
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWin() {
    let win = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            win = true;
            break;
        }
    }

    return win;
}
