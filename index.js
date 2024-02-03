// document.getElementById("roll-button").addEventListener("click", function () {
//     // Calculate a random roll for each dice
//     var roll1 = Math.floor(Math.random() * 6) + 1;
//     var roll2 = Math.floor(Math.random() * 6) + 1;

//     let total = roll1 + roll2;
//     document.getElementById("h2_count").innerHTML = "Count: " + total;
  
//     // Update the dice to show the new roll
//     updateDice('dice-container1', roll1);
//     updateDice('dice-container2', roll2);
//   });
  
//   function updateDice(containerId, roll) {
//     // Get the dice container element
//     let container = document.getElementById(containerId);
  
//     // Apply the correct transform to the container
//     switch (roll) {
//       case 1:
//         container.style.transform = 'rotateX(0deg) rotateY(0deg)';
//         break;
//       case 2:
//         container.style.transform = 'rotateX(-90deg) rotateY(0deg)';
//         break;
//       case 3:
//         container.style.transform = 'rotateX(0deg) rotateY(90deg)';
//         break;
//       case 4:
//         container.style.transform = 'rotateX(0deg) rotateY(-90deg)';
//         break;
//       case 5:
//         container.style.transform = 'rotateX(90deg) rotateY(0deg)';
//         break;
//       case 6:
//         container.style.transform = 'rotateX(-180deg) rotateY(0deg)';
//         break;
//     }
//   }


  document.getElementById("roll-button").addEventListener("click", function () {
    // Calculate a random count between 2 and 12
    var count = Math.floor(Math.random() * 11) + 2;
  
    // Calculate a random roll for each dice
    var roll1 = Math.floor(Math.random() * (count - 1)) + 1;
    var roll2 = count - roll1;
  
    // If roll2 is out of dice range, recalculate both rolls
    while (roll2 < 1 || roll2 > 6) {
      roll1 = Math.floor(Math.random() * (count - 1)) + 1;
      roll2 = count - roll1;
    }
  
    document.getElementById("h2_count").innerHTML = "Count: " + count;
  
    // Update the dice to show the new roll
    // updateDice('left-dice', roll1);
    // updateDice('right-dice', roll2);

    // Update the dice to show the new roll
  updateDice('dice', roll1, 0); // update the first dice
  updateDice('dice', roll2, 1); // update the second dice

  updateDice('dice', count); // update the first dice
  });
  

  function updateDice(diceClass, count) {
    // Get the dice elements
    let diceElements = document.getElementsByClassName(diceClass);
  
    // Apply the correct transform to the dice based on the count
    switch (count) {
      case 2:
        diceElements[0].style.transform = 'rotateX(0deg) rotateY(0deg)';
        diceElements[1].style.transform = 'rotateX(0deg) rotateY(0deg)';
        break;
      case 3:
        diceElements[0].style.transform = 'rotateX(0deg) rotateY(0deg)';
        diceElements[1].style.transform = 'rotateX(85deg) rotateY(1deg)';
        break;
      case 4:
        diceElements[0].style.transform = 'rotateX(85deg) rotateY(1deg)';
        diceElements[1].style.transform = 'rotateX(85deg) rotateY(1deg)';
        break;
      case 5:
        diceElements[0].style.transform = 'rotateX(85deg) rotateY(1deg)';
        diceElements[1].style.transform = 'rotateX(174deg) rotateY(88deg)';
        break;
      case 6:
        diceElements[0].style.transform = 'rotateX(174deg) rotateY(88deg)';
        diceElements[1].style.transform = 'rotateX(174deg) rotateY(88deg)';
        break;
      case 7:
        diceElements[0].style.transform = 'rotateX(174deg) rotateY(88deg)';
        diceElements[1].style.transform = 'rotateX(-4deg) rotateY(90deg)';
        break;
      case 8:
        diceElements[0].style.transform = 'rotateX(-4deg) rotateY(90deg)';
        diceElements[1].style.transform = 'rotateX(-4deg) rotateY(90deg)';
        break;
      case 9:
        diceElements[0].style.transform = 'rotateX(-4deg) rotateY(90deg)';
        diceElements[1].style.transform = 'rotateX(-95deg) rotateY(89deg)';
        break;
      case 10:
        diceElements[0].style.transform = 'rotateX(-95deg) rotateY(89deg)';
        diceElements[1].style.transform = 'rotateX(-95deg) rotateY(89deg)';
        break;
      case 11:
        diceElements[0].style.transform = 'rotateX(-95deg) rotateY(89deg)';
        diceElements[1].style.transform = 'rotateX(176deg) rotateY(4deg)';
        break;
      case 12:
        diceElements[0].style.transform = 'rotateX(176deg) rotateY(4deg)';
        diceElements[1].style.transform = 'rotateX(176deg) rotateY(4deg)';
        break;
    }
  }