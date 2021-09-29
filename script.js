// criar as sections com o DOM
const parent = document.getElementById('estruturaGlobal');

const torreInicial = document.createElement('section');
torreInicial.id = 'Torre-inicial';
parent.appendChild(torreInicial);
console.log(torreInicial);

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

// criar um handler de clique em todas as sections

const torres = document.querySelectorAll('section');
console.log(torres);

const disco = document.querySelectorAll('div');
console.log(disco);

let torresEvento = torres.forEach(torre =>
  torre.addEventListener('click', evt => {
    let torreClicada = evt.target.id;
    // return torreClicada;
    console.log(torreClicada);
  })
);
console.log(torresEvento);

// function interceptarClickTorre(evt){
//     const clickTorre = torreClicada;
//     if(clickTorre.)
// }

// função para verificar o tamanho do disco (impedir de mover a depender do tamanho)
function tamanhoDisco(primeiroClick, segundoClick) {
  
  let discoNaTorreInicial = torreClicada.lastElementChild();

  let torreFinal = torreClicada.lastElementChild();

  // fazer um if onde se o tamanho do disco for menor do que o do disco na próxima torre ou se ela estiver vazia, mover o disco pra frente
  if (
    discoNaTorreInicial.clientWidth() < torreFinal.clientWidth() ||
    torreFinal.lastElementChild() === 'null'
  ) {
    torreFinal.appendChild(discoNaTorreInicial);
  } else {
    // caso contrário, alertar
  }
  return torreFinal;
}

function vitoria() {
  const qtd = document.querySelectorAll('#Torre-final div').length
  const text = document.getElementById('textWin')
  if(qtd === 3) {
    text.innerText = "Parabéns, você conseguiu!!!"
  } else {
    text.innerText = "Vamos lá, você consegue!"
  }
}
