function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timer = null;
stopBtn.setAttribute("disabled", "disabled");
startBtn.addEventListener("click", () => {
  timer = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    startBtn.setAttribute("disabled", "disabled");
    stopBtn.removeAttribute("disabled");
  }, 1000);
});
stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  startBtn.removeAttribute("disabled");
  stopBtn.setAttribute("disabled", "disabled");
});

