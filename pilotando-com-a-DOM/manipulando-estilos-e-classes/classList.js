// Alterando estilos
// classList
const element = document.querySelector('body')

element.classList.add('active', 'green')
element.classList.remove('active')
element.classList.toggle('active')

//classList -> retorna uma lista de classess que foi passada como parâmetro no componente html selecionado

// classList.add("valor da class") -> adicionará a class passada no argumento 
//classList.remove("valor da class") -> remove
//classList.toggle("valor da class") -> adiciona a classe se ela não existe e remove se ela já existe 