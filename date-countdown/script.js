const newYearDate = '1 Jan 2022';

const countdownInterval = setInterval(() => {
  const endDate = new Date(newYearDate);
  const currentDate = new Date();
  const totalTimeInSeconds = (endDate - currentDate) / 1000;

  const days = Math.floor(totalTimeInSeconds / 3600 / 24);
  const hours = Math.floor(totalTimeInSeconds / 3600) % 24;
  const minutes = Math.floor(totalTimeInSeconds / 60) % 60;
  const seconds = Math.floor(totalTimeInSeconds) % 60;

  const countdown = document.getElementById('countdown');

  countdown.textContent = `${days} Days ${format(hours)} Hrs ${format(
    minutes
  )} Min ${format(seconds)} sec`;

  if (totalTimeInSeconds < 0) {
    clearInterval(countdownInterval);
    countdown.textContent = 'Happy New Year!';
  }
}, 1000);

function format(time) {
  return time < 10 ? `0${time}` : time;
}
