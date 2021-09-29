const torre = evt.currentTarget;
const ultimoDisco = evt.currentTarget.lastElementChild;
const primeiroClick = function (evt) {
  ultimoDisco;

  // console.log(disco.clientWidth);
  // if (disco.clientWidth >) {
  // }
};

const segundoClick = function (evt) {
  if (
    ultimoDisco.clientWidth < torre.lastElementChild ||
    ultimoDisco.lastElementChild === 'null'
  ) {
    torre.appendChild(ultimoDisco);
  }
};
let clickOne;
if ((clickOne = true)) {
  primeiroClick();
} else if ((clickOne = false)) {
  segundoClick();
}

const torres = document.querySelectorAll('section');

for (let i = 0; i < torres.length; i++) {
  torres[i].addEventListener('click', primeiroClick, segundoClick);
}
