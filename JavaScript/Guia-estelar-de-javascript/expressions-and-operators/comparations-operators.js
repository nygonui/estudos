// Operadores de comparação

// Irá comparar valores e retornar um Boolean como resposta à comparação

let one = 1
let two = 2 

// == igual
console.log(`Igual`)
console.log(one == 1) //true
console.log(one == "1") // true

// != diferente
console.log(`diferente`)
console.log(one != two)//true
console.log(one != 1)//false
console.log(one != "1")//false

// === estritamente igual
console.log(`Estritamente igual`)
console.log(one === "1")//false 
console.log(one === 1)//true
//obs: além de comparar o dado ele compara o tipo do dado também

// !== estritamente diferente
console.log(`estritamente diferente`)
console.log(two !== "2")//true

// > maior
console.log(`Maior`)
console.log(one > two) // false

// >= maior igual
console.log(`maior igual`)
console.log(one >= 1)//true
console.log(two >= one)//true

// < menor
console.log(`menor`)
console.log(one < two)//true

// <= menor igual 
console.log(`menor igual`)
console.log(one >= two)//true
