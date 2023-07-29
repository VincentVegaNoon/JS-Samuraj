const counter = () => {
  let time = 0;
  document.body.textContent = `${time} sekund`;
  const timeGo = () => {
    time++;
    document.body.textContent = `${time} sekund`;
  };
  return timeGo;
};
const start = counter();
setInterval(start, 1000);
