// COIN FLIP SIMULATOR
let outputE1 = document.getElementById("output");

let numHeads = 0;
let numTails = 0;

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let randNum = Math.random();
  console.log(randNum);

  if (randNum < 0.5) {
    outputE1.innerHTML = "<img src='img/heads.png' />";
    numHeads++;
    headsE1.innerHTML = numHeads;
  } else {
    outputE1.innerHTML = "<img src='img/tails.png' />";
    numTails++;
    tailsE1.innerHTML = numTails;
  }
}

let output2E2 = document.getElementById("output2");

let dice1 = 1;
let dice2 = 2;
let dice3 = 3;
let dice4 = 4;
let dice5 = 5;
let dice6 = 6;
document.getElementById("btn1").addEventListener("click", btnClicked1);

function btnClicked1() {
  let randomNum2 = Math.random();
  console.log(randomNum2);

  if (randomNum2 < 0.25) {
    output2E2.innerHTML = "<img src='img/1.png' />";
    dice1++;
    dice1.innerHTML = dice1;
  } else if (randomNum2 <= 0.34) {
    output2E2.innerHTML = "<img src='img/2.png' />";
    dice2++;
    dice2.innerHTML = dice2;
  } else if (randomNum2 < 0.5) {
    output2E2.innerHTML = "<img src='img/3.png' />";
    dice3++;
    dice3.innerHTML = dice3;
  } else if (randomNum2 < 0.65) {
    output2E2.innerHTML = "<img src='img/4.png' />";
    dice4++;
    dice4.innerHTML = dice4;
  } else if (randomNum2 < 0.76) {
    output2E2.innerHTML = "<img src='img/5.png' />";
    dice5++;
    dice5.innerHTML = dice5;
  } else if (randomNum2 < 0.86) {
    output2E2.innerHTML = "<img src='img/6.png'  />";
    dice6++;
    dice6.innerHTML = dice6;
  }
}
