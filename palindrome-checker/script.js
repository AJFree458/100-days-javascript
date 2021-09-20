const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', palindrome);

function palindrome() {
  const word = document.querySelector('.input-text').value;
  let wordLength = word.length;

  let start = word.substring(0, Math.floor(wordLength / 2)).toLowerCase();
  let end = word
    .substring(wordLength - Math.floor(wordLength / 2))
    .toLowerCase();

  // not ES6
  // let flip = end.split('').reverse().join('');

  // let's use ES6
  let flip = [...end].reverse().join('');

  if (start == flip) {
    result.innerHTML = `${word.toUpperCase()} is a palindrome`;
  } else {
    result.innerHTML = `${word.toUpperCase()} is NOT a palindrome`;
  }
}
