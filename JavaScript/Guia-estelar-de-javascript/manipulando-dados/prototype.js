/*
    Prototype

    * prototype-based language (linguagem baseada em protótipo)
    * prototype chain (cadeia de protótipo)
    * __proto__
    
    Explicação:
        Todo dado, mesmo não sendo um objeto é involto de outro objeto, então logo ele terá funções erdadas desse objeto que esta envolta dele

        Para ver quais são as propriedades de determinado dado basta colocar o dado + . + __proto__
        ex(console):
            name = 'cavalo'
            name.__proto__
            ou
            'cavalo'.__proto__

        outro exemplo(console):
            number = 14
            number.__proto__
            ou
            14.0.__proto__
        Isso serve para ver as propriedades que o dado tem
        de certa forma tudo é um objeto mesmo você não tendo o criado dessa forma 
*/
