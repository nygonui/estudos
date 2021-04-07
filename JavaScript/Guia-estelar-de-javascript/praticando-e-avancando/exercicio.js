// 1. Deckare uma variável de nome weight
let weight;

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight)
/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (interger)
        * stars: Number (float)
        * isSubscribed: Boolean
*/
let name = 'Nicolas'
let age = 18
let stars = 17.78
let isSubscribed = false

/*
    4. A variável student abaixo é de que tipo de dado?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no consoke a seguinte mensagem:
        
        <name> de idade <age> pesa weight kg.

        Atenção, substitua <name> <age> <weight> pelos valores de cada propriedade
*/
//Res4: Object
let student = {
    name: 'Rogério',
    age: 16,
    stars: 4.55,
    weight: 54.70,
    isSubscribed: true
}

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja =, somente o Array vazio
*/

let students = []

/*
    6. Reatribua calor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

students = [student]

/*
    7. Coloque no console o valor da posição zero do Array acima
*/
console.log(students[0])

/* 
    8. Crie um novo student e coloque na posição 1 do Array students
*/

const student1 = {
    name: 'Peu',
    age: 14,
    stars: 14.4,
    weight: 54.5,
    isSubscribed: true
}

students[1] = student1

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que?
    Após sua resposta, rode o código e veja se você acertou

    console.log(a)
    var a = 1

    R: undefined, pois ela sofre o roisting, por conta de ser um var, a variavel existe mas ainda não teve seu valor atribuido
*/

console.log(a)
var a = 1