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

// criar um handler de clique em todas as sections

const torres = document.querySelectorAll('section');
// console.log(torres);

const disco = document.querySelectorAll('div');
// console.log(disco);

let ultimoDisco;

torres.forEach(torre =>
  torre.addEventListener('click', evt => {
    ultimoDisco = evt.currentTarget.lastElementChild;
    console.log(ultimoDisco);
    let torreClicada = evt.currentTarget;
    console.log(torreClicada);
    if (ultimoDisco) {
      console.log(ultimoDisco);
      torreClicada.appendChild(ultimoDisco);
    }
    // return torreClicada;
  })
);

// const torre1 = torreInicial.addEventListener('click', pegarDisco);
// const torre2 = torreMeio.addEventListener('click', pegarDisco);
// const torre3 = torreFinal.addEventListener('click', pegarDisco);

// function pegarDisco() {
//   torre1 =
// }

// const torreCilada = torres.target.id;
// function interceptarClickTorre(evt){
//     const clickTorre = torreClicada;
//     if(clickTorre.)
// }

// função para verificar o tamanho do disco (impedir de mover a depender do tamanho)
// function tamanhoDisco(primeiroClick, segundoClick) {
// primeiro pegar a torre que sofreu o primeiro click e armazenar numa variável o último disco contido na torre
//  depois pegar essa variável e verificar o tamanho do disco
// let discoNaTorreInicial = torres.id.lastElementChild;
// console.log(discoNaTorreInicial);
// let torreFinal = torreClicada.lastElementChild();

// fazer um if onde se o tamanho do disco for menor do que o do disco na próxima torre ou se ela estiver vazia, mover o disco pra frente
//   if (
//     discoNaTorreInicial.clientWidth() < torreFinal.clientWidth() ||
//     torreFinal.lastElementChild() === 'null'
//   ) {
//     torreFinal.appendChild(discoNaTorreInicial);
//   } else {
//     // caso contrário, alertar
//   }
//   return torreFinal;
// }
// tipo, pra fazer essa função, eu preciso pegar o tamanho dos discos, pra isso, preciso pegar o último disco em cima da torre e verificar o tamanho dele. só que ai preciso verificar a torre inicial clicada, pra ver o disco nela (preciso da variável em que esse disco está contido) e dps verificar o tamanho.
// element.clientWidth para pegar os tamanhos do disco
// Condição de vitória: verificar o número de discos numa torre e a ordem de tamanhos. Usar o childElementCount para quantidade e Element.clientWidth para pegar os tamanhos dos discos.
