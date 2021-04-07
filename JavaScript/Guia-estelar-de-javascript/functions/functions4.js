// function scope
let subject = 'thinking'

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink(subject))
console.log(subject)

//OBS:
/*
Da forma que esta acima o dado subject que esta dentro da função é diferente do subject declarado antes dele, por isso ao imprimi-lo antes e depois de chamar a função o valor dele continua o mesmo, só muda quando chamamos a função que retorna um valor diferente 

se fizermos dessa forma:
    let subject
    function createThink(){
        subject = 'study'
        return subject
    }
    console.log(subject)
    console.log(createThink())
    console.log(subject)
as respostas serão:
    undefined
    study
    study
pois como não esta pedindo nenhum argumento e também dentro da função você não esta declarando a variavel subject ela usa a já existente no escopo global, ao imprimirmos a primeira vez sem chamar a função o valor é undefined pois não atribuimos nenhum valor ainda, quando imprimos chamando ele atribui o valor a váriavel e quando imprimimos após a chamada da função mas agora não chamando ela tem o valor pois foi atribuido a váriavel global
*/




