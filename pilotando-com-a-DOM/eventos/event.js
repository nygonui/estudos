// eventos
// argumento event

const input = document.querySelector('input')

input.onkeypress = function(event) {
    console.log(event)
}

//é possível fazer diversas coisas com event
//é um objeto com diversas informações sobre o acontecimento