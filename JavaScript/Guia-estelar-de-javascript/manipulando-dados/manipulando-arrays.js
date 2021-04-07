// Manipulando Arrays

let techs = ["html", "css", "js"]

// adicionar um item no fim 
techs.push("nodejs")
//adicionar no começo
techs.unshift("sql")
//remover do fim
//techs.pop()
//remover do começo
//techs.shift()
//pegar somente alguns elementos do array
//console.log(techs.slice(1,3))
    //*sendo o primeiro argumento o index dele, considerando o primeiro elemento do array como 0, e o segundo argumento é até qual posição ele vai pegarconsiderando o primeiro elemento do arrya como 1
//remover 1 ou mais items em qualquer posição do array 
//techs.splice(1,2)
    //o primeiro argumento é o index da posição que você irá começar a deletar e o segundo argumento é a quantidade de elementos que você irá deletar a partir do primeiro parâmetro
//encontrar a posição de um elemetno no array 
let index = techs.indexOf("css")   
techs.splice(index, 1)

console.log(techs)