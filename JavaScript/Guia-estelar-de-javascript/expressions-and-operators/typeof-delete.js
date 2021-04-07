/*
    Operators unary
    - typeof = show the type of data 
    - delete = delete same data
    (more used)
*/

const person = {
    name: 'Lula',
    age: 60,
    handsFingers: 9,
    pickPocket: true,
}

console.log(person)
console.log(typeof person)
delete person.age
console.log(person)