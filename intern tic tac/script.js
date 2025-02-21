document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const cells = document.querySelectorAll(".cell");
    const statusText = document.getElementById("status");
    const resetBtn = document.getElementById("reset");

    let currentPlayer = "X";
    let boardState = Array(9).fill("");
    let gameActive = true;
    let selectedPlayer = localStorage.getItem("selectedPlayer") || "X";

    document.getElementById("player-message").textContent = `You are Player ${selectedPlayer}`;

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]
    ];

    function handleClick(event) {
        const index = event.target.dataset.index;

        if (!gameActive || boardState[index] !== "") return;

        boardState[index] = currentPlayer;
        event.target.textContent = currentPlayer;

        if (checkWinner()) {
            statusText.textContent = `Player ${currentPlayer} Wins!`;
            gameActive = false;
            return;
        }

        if (boardState.every(cell => cell !== "")) {
            statusText.textContent = "It's a Draw!";
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusText.textContent = `Player ${currentPlayer}'s Turn`;
    }

    function checkWinner() {
        return winningCombinations.some(combination => {
            const [a, b, c] = combination;
            return boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c];
        });
    }

    function resetGame() {
        boardState.fill("");
        cells.forEach(cell => cell.textContent = "");
        currentPlayer = "X";
        statusText.textContent = "Player X's Turn";
        gameActive = true;
    }

    cells.forEach(cell => cell.addEventListener("click", handleClick));
    resetBtn.addEventListener("click", resetGame);
});
