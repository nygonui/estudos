// Navegando pelos elementos
// childNode children

const el = document.querySelector('body')

console.log(el.childNode)
//retorna um NodeList
//tem uma peculiaridade, se as tags não estiverem uma no lado da outra ele retorna #text (um texto em branco) antes do elementos

console.log(el.children)
//retorna um HTMLColection
//vai retornar só os elementos mesmo, os espaços em brancos não são retornados

//firstChild e firstElementChild

console.log(el.firstChild)
//firstChild -> se tiver o espaço em branco antes de um elemento ele irá retornar esse espaço em branco como primeiro elemento

console.log(firstElementChild)
//firstElementChild -> ele retorna a primeira tag após o pai


//lastChild e lastElementChild
//mesma coisa do first mas com os últimos elementos
