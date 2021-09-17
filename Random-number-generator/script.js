const num = document.querySelector('.number');
const btn = document.querySelector('.generate');

const generateNumber = () => {
  // Generate random number between 1 and 10
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  num.innerHTML = randomNumber;
};

btn.addEventListener('click', generateNumber);

generateNumber();
