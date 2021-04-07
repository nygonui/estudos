// Manipulando Arrays
// Strings para Arrays

// Transformar uma cadeia de caracteres em elementos de um array

let word = 'manipulação'
console.log(Array.from(word))
console.log(Array.from(word).join('.'))

/*
    - from(): método atrelado ao objeto/função Array que recebe uma cadeia de caracteres (string) e transforma em um Array
    - join(): método que recebe como parâmetro algo que irá completar os intervalos de um Array, exemplo:
        let hi = Array.from("helloworld")
        console.log(hi.join("-"))
            >h-e-l-l-o-w-o-r-l-d 
        
*/