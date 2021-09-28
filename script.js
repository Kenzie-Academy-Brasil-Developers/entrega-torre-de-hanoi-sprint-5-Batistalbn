// criar as sections com o DOM
const parent = document.getElementById('estruturaGlobal');

const section1 = document.createElement('section');
parent.appendChild(section1);

const section2 = document.createElement('section');
parent.appendChild(section2);

const section3 = document.createElement('section');
parent.appendChild(section3);

// criar as divs com o DOM
const div1 = document.createElement('div');
section1.appendChild(div1);

const div2 = document.createElement('div');
section1.appendChild(div2);

const div3 = document.createElement('div');
section1.appendChild(div3);

// criar um handler de clique em todas as sections
// to achando que para essa parte e as que vêm a seguir precisaremos criar uma function. bora ver.
