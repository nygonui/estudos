/* 
    ### Sistema de gastos familiar

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        * receitas: []
        * despesas: []
        
    Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostras uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo
*/

let familia = {
    receitas: [12, 15, 46, 60],
    despesas: [40, 50, 30, 1000]
}

function soma(array){
    let total = 0;

    for(let value of array){
        total += value
    }

    return total
}

function calculateBalance (){
    const calcularReceitas = soma(familia.receitas)
    const calcularDespesas = soma(familia.despesas)

    const total = calcularReceitas - calcularDespesas

    const itsOk = total >= 0

    const mensage = 'negativo'

    if(itsOk === true){
        mensage = 'positivo'
    }

    console.log(`Saldo ${mensage}: ${total.toFixed(2)}R$`)
}

calculateBalance()