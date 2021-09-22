const btn = document.querySelector('.btn');
const coupon = document.querySelector('.coupon');

const copyText = e => {
  e.preventDefault();

  coupon.select();
  coupon.setSelectionRange(0, 999999);

  // execCommand is deprecated
  // document.execCommand('copy');

  // let's try the clipboard writeText method
  navigator.clipboard.writeText(coupon.value);

  btn.textContent = 'Copied!!!';

  setTimeout(() => {
    btn.textContent = 'Copy';
  }, 3000);
};

btn.addEventListener('click', copyText);
