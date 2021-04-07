// Operador condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2 

// Exemplosc

console.log("Café da manhã top?")
let pao = true
let queijo = true

const perfectBreakfast = pao && queijo ? console.log("top") : console.log("no-top")

console.log('Maior de 18?')

let idade = 17

const maiorDeIdade = idade >= 18 ? console.log('maior de idade') : console.log('menor de idade')