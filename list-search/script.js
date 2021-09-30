const inputElement = document.getElementById('search');

inputElement.addEventListener('keyup', search);

function search() {
  const inputVal = inputElement.value;
  const liElement = document.getElementsByTagName('li');

  for (let i = 0; i < liElement.length; i++) {
    if (liElement[i].innerHTML.toLowerCase().includes(inputVal)) {
      liElement[i].style.display = '';
    } else {
      liElement[i].style.display = 'none';
    }
  }
}
