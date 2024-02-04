function modalRollDice() {
    return Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
}

function startGame() {
    let player1Choice = document.getElementById("player1Choice").value;
    let player2Choice = document.getElementById("player2Choice").value;
    let message = document.getElementById("message");

    document.getElementById("rollDiceButton").addEventListener("click", function() {
        let player1Roll = modalRollDice();
        let player2Roll = modalRollDice();

        message.textContent = `Player 1 rolled ${player1Roll}, Player 2 rolled ${player2Roll}`;

        if ((player1Choice === "high" && player1Roll > player2Roll) || (player1Choice === "low" && player1Roll < player2Roll)) {
            message.textContent += ". Player 1 goes first!";
            hideModal();
        } else if ((player2Choice === "high" && player2Roll > player1Roll) || (player2Choice === "low" && player2Roll < player1Roll)) {
            message.textContent += ". Player 2 goes first!";
            hideModal();
        }
    });
}

// Show the modal when the page loads
window.onload = function() {
    showModal();
};

// Start the game when the button is clicked
document.getElementById("startGameButton").addEventListener("click", startGame);


// these two are for showing and hiding the modal

// Function to show the modal
// function showModal() {
//     let modal = document.getElementById("choiceModal");
//     modal.style.display = "block";
// }

// Function to hide the modal
// function hideModal() {
//     let modal = document.getElementById("choiceModal");
//     modal.style.display = "none";
// }