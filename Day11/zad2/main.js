const nowTime = new Date().getTime();
const endTime = new Date("2023-10-01 22:34:00").getTime();

const spanD = document.querySelector("span.d");
const spanH = document.querySelector("span.h");
const spanM = document.querySelector("span.m");
const spanS = document.querySelector("span.s");

setInterval(() => {
  const nowTime = new Date().getTime();
  const days = Math.floor(
    endTime / (1000 * 60 * 60 * 24) - nowTime / (1000 * 60 * 60 * 24)
  );
  const hours = Math.floor(
    (endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24
  );
  const minutes =
    Math.floor(endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60;
  const seconds = Math.floor(endTime / 1000 - nowTime / 1000) % 60;
  spanD.textContent = days < 10 ? "0" + days : days;
  spanH.textContent = hours < 10 ? "0" + hours : hours;
  spanM.textContent = minutes < 10 ? "0" + minutes : minutes;
  spanS.textContent = seconds < 10 ? "0" + seconds : seconds;
}, 1000);
