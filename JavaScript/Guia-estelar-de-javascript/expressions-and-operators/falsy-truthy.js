// FALSY e TRUTHY

/*
    FALSY
    Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

    false
    0
    -0
    "" - strinf vazia
    null
    undefined
    NaN
*/

console.log(0 ? 'verdadeiro' : 'falso')

/* 
    TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é considerado obrigatório (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0" - string com conteúdo
    "false"
    -1
    Infinity
    -Infinity
*/
console.log({} ? 'verdadeiro' : 'false')
