class CountdownTimer {
  constructor(targetDateTime, daysEl, hoursEl, minutesEl, secondsEl) {
    this.targetDateTime = new Date(targetDateTime).getTime();
    this.daysEl = daysEl;
    this.hoursEl = hoursEl;
    this.minutesEl = minutesEl;
    this.secondsEl = secondsEl;
  }

  start() {
    this.timer = setInterval(() => {
      const currentTime = new Date().getTime();
      const remainingTime = this.targetDateTime - currentTime;

      if (remainingTime <= 0) {
        this.stop();
      } else {
        this.updateDisplay(remainingTime);
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.timer);
  }

  updateDisplay(remainingTime) {
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

    this.daysEl.innerHTML = this.formatNumber(days);
    this.hoursEl.innerHTML = this.formatNumber(hours);
    this.minutesEl.innerHTML = this.formatNumber(minutes);
    this.secondsEl.innerHTML = this.formatNumber(seconds);

    console.log(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
  }

  formatNumber(number) {
    return number < 10 ? `0${number}` : number;
  }
}

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const toDateTime = "2024-02-18";
const countdownTimer = new CountdownTimer(toDateTime, daysEl, hoursEl, minutesEl, secondsEl);
countdownTimer.start();
