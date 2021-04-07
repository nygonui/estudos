// Manipulando Arrays
// Elementos do Array

// Contar elementos de um array

let array = [
    'a',
    {name: 'Rogério'},
    function(){ return 'retorno da função dentro do array'}
]

console.log(array[2]())

/* 
    - No JS é possível ter diferentes tipos de dados dentro de um Array, neste caso temos uma string: 'a'; um objeto: {name: Rogério}; e uma função: function(){ return 'retorno da função'}

    - Ao imprimirmos podemos apenas imprimir:
        * todo o array: console.log(array)
        * alguma posição expecífica: console.log(array[1])
        * alguma posição expecífica junto de alguma propriedade desse dado:
            1-console.log(array[1].name)
            2-console.log(array[2]())
        1- No exemplo 1, como o dado na posição é um objeto, podemos acessar alguma propriedade dentro dele, neste caso o dado name
        2- No ex 2, o dado é uma função que retorna algo, colocando os parênteses quando chamamos a sua posição faz com que a função comece a rodar.
*/