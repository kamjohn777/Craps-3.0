
  document.getElementById("roll-button").addEventListener("click", function () {
    // Calculate a random count between 2 and 12
    let count = Math.floor(Math.random() * 11) + 2;
  
    // Calculate a random roll for each dice
    let roll1 = Math.floor(Math.random() * (count - 1)) + 1;
    let roll2 = count - roll1;
  
    // If roll2 is out of dice range, recalculate both rolls
    while (roll2 < 1 || roll2 > 6) {
      roll1 = Math.floor(Math.random() * (count - 1)) + 1;
      roll2 = count - roll1;
    }
  
    document.getElementById("h2_count").innerHTML = "Count: " + count;
  

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