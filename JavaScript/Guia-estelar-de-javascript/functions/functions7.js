/*
    Function() constructor

    * expressão new 
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const mayk = new Person("Mayk")
const joao = new Person("João")

console.log(mayk.walk())
console.log(joao.walk())

//OBS:
/*
    - quando usamos new seguido da função ela se torna uma função contrutora
      - que por sua vez retorna um objeto no exemplo acima esta retornando um objeto para as constantes mayk e joao
    -  this referencia ao objeto criado pelo new 

    - letra inicial do nome da função maiúscula = boa prática
    - serve para agilizar linhas de código, ao invés de sempre criar um objeto person para cada variável, você cria uma função construtora, e dentro dela usa o this e quando criar a variavel que ira receber esse objeto usa new Objeto/Função Contrutora
    
 */


