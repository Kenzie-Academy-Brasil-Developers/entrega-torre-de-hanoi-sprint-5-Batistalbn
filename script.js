// criar as sections com o DOM
const parent = document.getElementById('estruturaGlobal');

const torreInicial = document.createElement('section');
torreInicial.id = "Torre-inicial"
parent.appendChild(torreInicial);

const torreMeio = document.createElement('section');
torreMeio.id = "Torre-meio"
parent.appendChild(torreMeio);

const torreFinal = document.createElement('section');
torreFinal.id = "Torre-final"
parent.appendChild(torreFinal);

// criar as divs com o DOM
const disco1 = document.createElement('div');
disco1.id = "disco1"
torreInicial.appendChild(disco1);

const disco2 = document.createElement('div');
disco2.id = "disco2"
torreInicial.appendChild(disco2);

const disco3 = document.createElement('div');
disco3.id = "disco3"
torreInicial.appendChild(disco3);

// criar um handler de clique em todas as sections
// to achando que para essa parte e as que vêm a seguir precisaremos criar uma function. bora ver.

const torres = document.querySelectorAll('section');
console.log(torres);

const disco = document.querySelectorAll('div');
console.log(disco);

torres.forEach((torre) => torre.addEventListener(
    'click', (evt) => console.log(evt.target.id))
);