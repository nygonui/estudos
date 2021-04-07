// Manipulando Strings e Arrays
// Separando strings

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _ (underscore)

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toUpperCase()) 

/*
    - split(): método que recebe como argumento o que será que irá dividir um string em um array, no exemplo acima está (" "), indicando que irá separar por espaços, ex;
            let phrase = "Oi Mundo"
            let myArray = phrase.split(" ")
            console.log(myArray)
                > [
                    0:Oi
                    1:Mundo
                  ]
        - sem o método split ficaria assim um array formado a partir da variavel phrase:
            0:Oi
            1:
            2:Mundo
        Se passarmos ("u"), ficará dessa forma:
            0:OiM
            1:ndo
    
    - join(): método que recebe como argumento o que será que irá ficar entre cada posição do array e formará uma string só, se passarmos assim como no exemplo ("_")
            Oi_Mundo
        - Se passarmos ("*")
            Oi*Mundo

*/