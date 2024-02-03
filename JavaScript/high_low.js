
function rollDice() {
    return Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
  }
  

// Modal functions for high or low dialog box
// function startGame() {
//     let modal = document.getElementById("choiceModal");
//     let player1Choice = document.getElementById("player1Choice").value;
//     let player2Choice = document.getElementById("player2Choice").value;
  
//     let player1Roll = rollDice();
//     let player2Roll = rollDice();
  
//     console.log(`Player 1 rolled ${player1Roll}`);
//     console.log(`Player 2 rolled ${player2Roll}`);
  
//     if ((player1Choice === "high" && player1Roll > player2Roll) || (player1Choice === "low" && player1Roll < player2Roll)) {
//       console.log("Player 1 goes first");
//     } else {
//       console.log("Player 2 goes first");
//     }
  
//     // Close the modal
//     $('#choiceModal').modal('hide');
//   }
  
//   // Show the modal when the page loads
//   $(document).ready(function() {
//     $('#choiceModal').modal('show');
//   });
  
//   // Start the game when the button is clicked
//   document.getElementById("startGameButton").addEventListener("click", startGame);
function startGame() {
    let player1Choice = document.getElementById("player1Choice").value;
    let player2Choice = document.getElementById("player2Choice").value;
    let message = document.getElementById("message");
  
    document.getElementById("rollDiceButton").addEventListener("click", function() {
      let player1Roll = rollDice();
      let player2Roll = rollDice();
  
      message.textContent = `Player 1 rolled ${player1Roll}, Player 2 rolled ${player2Roll}`;
  
      if ((player1Choice === "high" && player1Roll > player2Roll) || (player1Choice === "low" && player1Roll < player2Roll)) {
        message.textContent += ". Player 1 goes first!";
        $('#choiceModal').modal('hide');
      } else if ((player2Choice === "high" && player2Roll > player1Roll) || (player2Choice === "low" && player2Roll < player1Roll)) {
        message.textContent += ". Player 2 goes first!";
        $('#choiceModal').modal('hide');
      }
    });
  }
  
  // Show the modal when the page loads
  $(document).ready(function() {
    $('#choiceModal').modal('show');
  });
  
  // Start the game when the button is clicked
  document.getElementById("startGameButton").addEventListener("click", startGame);