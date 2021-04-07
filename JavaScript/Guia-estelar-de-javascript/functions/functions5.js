// function hoisting

sayMyName();

function sayMyName(){
    console.log('Nicolas')
}

//OBS:
/*
Fazendo da maneira como esta a cima o hoisting funciona, fazendo uma função do tipo statement, mas quando fazemos o tipo de expressão de função ou função anônima o hoisting não funcina 
ex:
    sayMyName();

    const sayMyName = function (){
        console.log('Nicolas')
    }
    - isso da erro
    - até mesmo usando var ou let
    - até mesmo fazendo const sayMyName = function sayMyName(){}
 */