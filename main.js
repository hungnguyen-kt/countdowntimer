const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function countdown(toDateTime) {
  const toTime = new Date(toDateTime).getTime();

  let timer = setInterval(() => {
    const currentTime = new Date().getTime();
    const remainingTime = toTime - currentTime;

    if (remainingTime <= 0) {
      clearInterval(timer);
    } else {
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
      const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

      daysEl.innerHTML = days < 10 ? `0${days}` : days;
      hoursEl.innerHTML = hours < 10 ? `0${hours}` : hours;
      minutesEl.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
      secondsEl.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
      // console.log(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
    }
  }, 1000);
}

const toDateTime = "2024-02-18";
countdown(toDateTime);
