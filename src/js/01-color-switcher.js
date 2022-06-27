function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timer = null;
startBtn.addEventListener("click", () => {
  timer = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
      startBtn.setAttribute("disabled", true); 
      stopBtn.removeAttribute("disabled", false);
  }, 1000);
});
stopBtn.addEventListener("click", () => {
    clearInterval(timer);
    startBtn.removeAttribute("disabled", false);
    stopBtn.setAttribute("disabled", true);
});

