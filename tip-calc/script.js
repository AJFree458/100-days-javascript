const btn = document.querySelector('.btn');
const tip = document.querySelector('.tip');
const total = document.querySelector('.total');
const errorMessage = document.querySelector('.error');

const hideError = () => {
  setTimeout(() => {
    errorMessage.style.display = 'none';
  }, 5000);
};

const calculateTip = () => {
  const bill = document.querySelector('.bill').value;
  const rate = document.querySelector('.rate').value;

  if (bill === '' || rate == '') {
    errorMessage.style.display = 'block';
    hideError();
  } else if (isNaN(bill)) {
    errorMessage.innerHTML = 'Please enter a number';
    errorMessage.style.display = 'block';
    hideError();
  } else {
    let tipAmount = bill * rate;
    tipAmount = Math.ceil(tipAmount);
    tip.innerHTML = `Tip: $${tipAmount}`;

    let totalBill = Number(bill) + tipAmount;
    total.innerHTML = `Total Bill: $${totalBill}`;
  }
};

btn.addEventListener('click', calculateTip);
