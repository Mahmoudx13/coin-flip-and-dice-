let dice1 = 1;
let dice2 = 2;
let dice3 = 3;
let dice4 = 4;
let dice5 = 5;
let dice6 = 6;
document.getElementById("btn1").addEventListener("click", btnClicked);

function btnClicked1() {
  let randNum1 = Math.random();
  console.log(randNum1);

  if (randNum1 < 0.14) {
    outputt.innerHTML = "<img src='img/1.png' />";
    dice1++;
    dice1.innerHTML = dice1;
  } else if (randomNum2 <= 0.3) {
    output.innerHTML = "<img src='img/2.png' />";
    dice2++;
    dice2.innerHTML = dice2;
  }
}
