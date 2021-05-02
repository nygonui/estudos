//Manipulando elementos 
//Atributos

//selecionou o elemento header e armazenou na constante header
const header = document.querySelector('header')
header.setAttribute('id', 'header')


const headerID = document.querySelector('#header')
console.log(headerID.getAttribute('id'))

header.removeAttribute('id')

header.setAttribute('class', 'bg header')

console.log(headerID.getAttribute('class'))


// setAttribute('atributo', 'valorDoAtributo') = adiciona um atributo e o seu valor

// getAtribute('atributo') = retorna o valor do atributo passado

// removeAttribute('atributo') = exclui o atributo passado como parâmetro 