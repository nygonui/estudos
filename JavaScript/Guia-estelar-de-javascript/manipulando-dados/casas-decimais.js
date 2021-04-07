// Casas decimais 
// Manipulando String e Numbers

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let number = 345.46548987
console.log(number.toFixed(2).replace(".", ","))


/*
    - O toFixed e replace são funções atreladas ao objeto number, sendo assim chamadas de método
        * toFixed() = é um método que faz o dado do tipo Number ter as casas decimais respectiva ao valor passado como argumento na hora de chama-lo e retorna uma string
        * replace(), serve para trocar um dado, sendo o primeiro argumento passado o dado que será trocado e segundo argumento o dado que irá substituir
        
    - Como o método toFixed retorna uma string é possível usarmos o método replace, mas se tentarmos concatenar o número, agora do tipo string para o tipo Number dará errado, pois como trocou o ponto pela virgula, o js não entende esse dado mais como um Number 
*/