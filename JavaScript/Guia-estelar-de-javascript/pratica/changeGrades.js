/* 
    ### Transformar notas escolares

    Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

    * de 90 para cima - A
    * entre 80 - 89   - B
    * entre 70 - 79   - C
    * entre 60 - 69   - D
    * menor que 60    - F
*/
function changeGrade(nota){
    let charNota = ['A', 'B', 'C', 'D', 'F']

    if(nota >= 90){
        return charNota[0]
    } else if (nota >= 80 && nota <= 89){
        return charNota[1]
    } else if (nota >= 70 && nota <= 79){
        return charNota[2]
    } else if (nota >= 60 && nota <=69) {
        return charNota[3]
    } else {
        return charNota[4]
    }
}


let nota = 80
console.log(changeGrade(nota))