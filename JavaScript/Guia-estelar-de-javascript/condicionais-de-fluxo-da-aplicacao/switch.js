// switch

function calculater(number1, operator, number2){
    let result

    switch(operator){
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não implemetado')
            break
    }

    return result
}

console.log(calculater(5, '+', 8))