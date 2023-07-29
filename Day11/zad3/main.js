const start = document.querySelector(".main");
const btnReset = document.querySelector(".reset");
const div = document.querySelector(".time div");
// div.textContent = "";
let time = 0;
let active = false;
let idI;
const startTime = () => {
  if (!active) {
    active = !active;
    start.textContent = "Pauza";
    idI = setInterval(run, 10);
  } else {
    active = !active;
    start.textContent = "Start";
    clearInterval(idI);
  }
};
const run = () => {
  time++;
  div.textContent = (time / 100).toFixed(2);
};
const reset = () => {
  time = 0;
  div.textContent = "---";
  active = false;
  start.textContent = "Start";
  clearInterval(idI);
};
start.addEventListener("click", startTime);
btnReset.addEventListener("click", reset);
