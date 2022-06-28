import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const datetime = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');

let selectedDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        selectedDate = selectedDates[0].getTime();
        if (selectedDates[0] <= Date.now()) {
          alert (`Please choose a date in the future`);
        } else {
            startBtn.removeAttribute("disabled", "disabled"); 
      }
    
  },
};

flatpickr(datetime, options);

startBtn.addEventListener("click", () => {
    startBtn.setAttribute("disabled", "disabled"); 
    const intervalID = setInterval(() => {
        const interval = selectedDate - Date.now();
        const date = convertMs(interval);
        if (date.seconds < 0) {
            clearInterval(intervalID);
            return;
        }
        updateTimer(date);  
    }, 1000)
})


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimer({ days, hours, minutes, seconds }) {
    timerDays.textContent = addLeadingZero(days);
    timerHours.textContent = addLeadingZero(hours);
    timerMinutes.textContent = addLeadingZero(minutes);
    timerSeconds.textContent = addLeadingZero(seconds);
}
function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}