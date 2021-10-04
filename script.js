// criar as sections com o DOM
const parent = document.getElementById('estruturaGlobal');

const torreInicial = document.createElement('section');
torreInicial.id = 'Torre-inicial';
parent.appendChild(torreInicial);

const torreMeio = document.createElement('section');
torreMeio.id = 'Torre-meio';
parent.appendChild(torreMeio);

const torreFinal = document.createElement('section');
torreFinal.id = 'Torre-final';
parent.appendChild(torreFinal);

// criar as divs com o DOM
const disco1 = document.createElement('div');
disco1.id = 'disco1';
torreInicial.appendChild(disco1);

const disco2 = document.createElement('div');
disco2.id = 'disco2';
torreInicial.appendChild(disco2);

const disco3 = document.createElement('div');
disco3.id = 'disco3';
torreInicial.appendChild(disco3);

const torres = document.querySelectorAll('section');

let click = false;
let disco;

torres.forEach((element) => {
  element.addEventListener("click", movimentoDisco);
});

function movimentoDisco(event) {
  let torreSelecionada = event.currentTarget;

  let qtdDisco = torreSelecionada.childElementCount;

  if (click === false && qtdDisco > 0) {
    click = true;
    disco = torreSelecionada.children[qtdDisco - 1]
    console.log(click)
  } else if (click === true){
    if (
      torreSelecionada.children.length === 0 || 
      torreSelecionada.lastElementChild.clientWidth >= disco.clientWidth
      ){
        torreSelecionada.appendChild(disco);
        click = false;
    } else {
      click = false
      alert("VocÊ não pode mover este disco")
    }
  }
}