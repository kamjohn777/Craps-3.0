document.getElementById("roll-button").addEventListener("click", function () {
  let dice1 = Math.floor(Math.random() * 6) + 1;
  let dice2 = Math.floor(Math.random() * 6) + 1;
  let roll = dice1 + dice2;
  document.getElementById("h2_count").innerHTML = roll;
});
