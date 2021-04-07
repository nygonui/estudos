//Retornando valores dentro da função

const sum = function(number1, number2){
    let total = number1 + number2
    return total
}

let number1 = 24
let number2 = 21

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`)

//Obs:
/*
- Se fizermos isso:
        const sum = function(number1, number2){
            total = number1 + number2
            return total
        }
    A váriavel total irá funcionar, mas após que fizermos isso:
        console.log(sum(number1, number2))
    A váriavel total irá existir fora do escopo da função, então sempre devemos usar as palavras reservadas para declaração de variáveis, de preferência usar 'let'
*/



