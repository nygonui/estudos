// throw

function sayMyName(name = '') {
    if(name === ''){
        throw new Error('Nome obrigatório!!')
    }
    console.log(name)
}

// try...catch
try{
    sayMyName('Nicolas')
} catch(e) {
    console.log(e)
}

//console.log('após ao try/catch')

/* 
    Serve para capturar erros, fazer erros, etc...
    com o throw fazemos o erro ser arremeçado 
    com o catch nós pegamos esse erro
    o try tenta executar um bloco de código
*/