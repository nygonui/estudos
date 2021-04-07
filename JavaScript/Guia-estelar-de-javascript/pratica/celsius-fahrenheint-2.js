/* 
    ### Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9
    F = (C * 9) / (5 + 32)
*/

// transformDegree('50F')
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    //fluxo de erro
    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Grau não identificado')
    }

    // fluxo ideal, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    //fluxo alternativo, C -> F
    if(celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = (celsius) => celsius * 9 / 5 + 32
        degreeSign = 'F'
    }


    return formula(updatedDegree) + degreeSign
}

try{
    console.log(transformDegree('50C'))
    console.log(transformDegree('122F'))
    console.log(transformDegree('12Z'))
} catch (error) {
    console.log(error)
}

/* 
    OBS: estudar expressão regular
    
    -> Explicação:
    * linha 11: criação da função que irá conferir qual é a unidade de medida do grau de temperatura e converte-lo para o outro (C->F, F->C)
    * linha 12 e 13: váriaveis do tipo boolean, que irão ver qual é a unidade de medida do valor passado no parâmetro, de que forma?
        degree.toUpperCase() -> transformará qualquer letra que tenha no argumento em maiúscula para facilitar a comparação o .includes('X') -> irá verificar se X existe no valor passado (C ou F), e deixará as variáveis com os valores de true ou false
    * linha 16: fluxo de erro, irá verificar se pelo menos uma das váriaveis anteriores são verdadeiras, se não forem, ele irá entrar no if e chamará um novo erro (throw new Error('MEnsagem do erro')), o comando new Error, cria um objeto do tipo Error, pré definido do javascript que contém algumas propriedades, pesquisar!
    * linha 21: início do fluxo ideal (para evitar de fazer perguntas) -> let updatedDegree = Number(degree.toUpperCase().replace("F", "")) váriavel que irá pegar o valor que até então é uma string, e transformalá em number, com a função toUpperCase() transforma todas as letras em maiúsculas para facilitar a o manuseamento, com a função .replace("F", ""), trocará o 'F' por nada, e assim poderá virar um número 
    * linha 22: arrow function uma forma rápida de fazer, chamar e executar uma função, função que transformará o o valor F em C
    * linha 23: variável para trocar o sinal, pois na função da linha anterior, convertemos o valor em fahrenheit para celsius e agora torcaremos o sinal, essa váriavel receberá esse valor
    * linha 26: inicio do fluxo alternativo, verifica se celsiusExists é true, se for ele entrará nesse if e executará os mesmos passos a cima porém convertendo de Celsius para Fahrenheit


*/