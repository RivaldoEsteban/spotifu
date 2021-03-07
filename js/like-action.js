const corazonClick = document.getElementById('corazon')
corazonClick.addEventListener('click', colorCorazon)

let f = false



function colorCorazon() {
  if(f == false) {
    corazonClick.style.filter = 'invert(100)'
    f = true;
  } else {
    corazonClick.style.filter = 'contrast(50%)'
    f = false;
  }
};