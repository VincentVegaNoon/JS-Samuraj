const clock = document.querySelector(".clock");

const showDate = () => {
  const now = new Date();
  const hours = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
  const minutes =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  const seconds =
    now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
  console.log(now.getHours());
  clock.textContent = `Godzina: ${hours}:${minutes}:${seconds}`;
};
setInterval(showDate, 1000);
