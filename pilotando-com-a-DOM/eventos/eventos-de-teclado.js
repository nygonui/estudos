const inputCreated = document.createElement('input')

const body = document.querySelector('body')

const header = body.querySelector('header')

body.insertBefore(inputCreated, header.nextSibling)

const input = document.querySelector('input')

// input.onkeydown = function(){
//     console.log('Meu ovo')
// }
//o onkeydown toda ves que uma tecla for digitada no input irá executar a função

// input.onkeyup = function(){
//     console.log('Ovo meu')
// }
//onkeyup só vai executar a função quando a tecla subir, quando vc soltar a tecla

input.onkeypress = function(){
    console.log('Ovo')
}
//onkeypress irá executar a função toda a vez q uma letra for digitadas