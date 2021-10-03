// Time in minutes amount
let timeInMinutes = 10;
let promoTime = timeInMinutes * 60;

let countdownTime = document.getElementById('countdown');

function startCountdown() {
  let promoTimer = setInterval(() => {
    if (promoTime <= 0) {
      clearInterval(promoTimer);
      countdownTime.innerHTML = 'Promotion has ended';
    } else {
      promoTime--;
      // const days = Math.floor(promoTime / 3600 / 24);
      const hours = Math.floor(promoTime / 3600) % 24;
      const mins = Math.floor(promoTime / 60) % 60;
      const seconds = Math.floor(promoTime % 60);

      countdownTime.innerHTML = `TIME: ${format(hours)}hr ${format(
        mins
      )}min ${format(seconds)}sec`;
    }
  }, 1000);
}

function format(time) {
  return time < 10 ? `0${time}` : time;
}

startCountdown();
