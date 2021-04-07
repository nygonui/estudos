/*
    Arithmetic operators
    - multiplication (times) *
    - division (Divided by) /
    - addiction (plus) +
    - subtraction (minus) -

    - rest of division % (percent)
    - increment ++
    - decrement --
    - exponential **
*/

let x, y, z, w
x = 2
y = 3.8
z = 7
w = 9.5

let times = x * w
console.log(`${x} times ${w} is ${times}`)

let divided = z / x
console.log(`${z} divided by ${x} is ${divided}`)

let plus = y + w 
console.log(`${y} plus ${w} is ${plus}`)

let minus = w - z
console.log(`${w} minus ${z} is ${minus}`)

let remainder = x % w
console.log(`the remainder of ${x} divided by ${w} is ${remainder}`)


console.log(`increment of the number ${x} is ${++x}`)
// se colocarmos x++ dentro do console.log ele não irar mostrar para nós o incremento, funcinaria usando dessa forma se fizermos esse incremento 'x++' se fizermos antes do console.log

let decrement = --z
console.log(`the decremente of ${z} is ${decrement}`)

let exponencial = z ** 2
console.log(`squaded of ${z} is ${exponencial}`)

