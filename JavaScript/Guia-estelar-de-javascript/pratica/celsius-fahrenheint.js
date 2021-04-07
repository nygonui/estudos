/* 
    ### Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9
    F = (C * 9) / (5 + 32)
*/

let grausF = '45 F'
let grausC = '21 C'

let array = grausF.split(" ")


function changeDegrees(degree) {
    const idDegree = degree.split(" ").pop()
    const numberDegree = Number(degree.split(" ").shift())

    if(idDegree == 'C'){
        return (numberDegree * 9)/(5 + 32)
    } else {
        return ((numberDegree - 32) * 5) / 9
    }

}

console.log(`${grausF} em Celsius é ${changeDegrees(grausF).toFixed(2)} C`)