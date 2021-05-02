// Criando e adicionando elementos

//creatElement
const div = document.createElement('div');
div.innerText = "Olá Devs!"


// insertBefore
const body = document.querySelector('body')
const script = body.querySelector('script')

body.insertBefore(div, script)
//irá adcionar antes da tag script dentro do body

//para adicionar antes de um elemento

const header = body.querySelector('header')
body.insertBefore(div, header.nextSibling)
//dessa forma vc ta passando o irmão do header que vem depois dele

// append prepend
// const body = document.querySelector('body').appendChild(div);


//body.append(div) - adiciona depois da última tag 
//body.prepend(div) - adiciona antes da primeira tag