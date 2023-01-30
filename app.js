let attemptsCount = 0;
let totalAttempt = 5;
let youHaveWon = 0;
let youHaveLost = 0;
// Selecting Document ===============================
const form = document.querySelector("form");
const userInput = form.querySelector("input[type=number]");
const submitBtn = form.querySelector("input[type=submit]");
const attemptsText = document.querySelector(".attempts");
const win = document.querySelector(".win");
const lost = document.querySelector(".lost");
const directResult = document.querySelector(".direct__result");
form.addEventListener("submit", (eve) => {
  attemptsCount++;
  eve.preventDefault();
  gameLogic();
  if (attemptsCount <= totalAttempt) {
    attemptsText.textContent = `Your Current Attempts ${
      totalAttempt - attemptsCount
    }`;
  }
  if (totalAttempt - attemptsCount === 0) {
    userInput.disabled = true;
    submitBtn.disabled = true;
  }
});
// Adding Game Logic ================
function gameLogic() {
  const input = parseInt(userInput.value);
  const randNum = randNumber(input);
  console.log(input);
  console.log(randNum);
  if (input === randNum) {
    win.textContent = "You Have Won !";
    win.style.color = "#00bfb2";
    youHaveWon++;
  }else{
    lost.textContent = `You Have Lost ! Your Rand Was ${randNum}`;
    lost.style.color = "#d3273e";
    youHaveLost++;
  }
  directResult.textContent = `Won  : ${youHaveWon} , Lost ${youHaveLost}`;

  // Win , Lost Result
  if (input === randNum) {
    lost.style.display = "none";
    win.style.display = "block";
  }
  if (input !== randNum) {
    win.style.display = "none";
    lost.style.display = "block";
  }
  userInput.value = "";
}
// Random Number Generator ==================
const randNumber = (randNum) => {
  const rand = Math.round(Math.random() * randNum) + 1;
  return rand;
};
