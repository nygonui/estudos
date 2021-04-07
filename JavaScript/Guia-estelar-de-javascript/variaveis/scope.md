# Scope 

* Escope determina a visibilidade de alguma variável no JS

# Block statement
```js
//Vamos iniciar um bloco
{
    // aqui dentro é um bloco e posso colocar qualquer código
} // aqui fechamos o bloco
```
O bloco, também criará um novo escopo. Chamamos de `block-scoped` 

## var
```js
// var é global e poderá funcionar fora de  um escopo de bloco
// hoisting = elevação
// a var é global e mesmo dentro do bloco ela existe na aplicação, porém antes do bloco o seu valor é undefined
// dentro do bloco que ocorre a atribuição da variável x
console.log('> existe x antes do bloco?', x)

{
    var x = 0
}

console.log('> existe x depois do bloco?', x)
```

## let e const
```js
// const e let são locais e só funcionam no escopo onde foi criada

console.log('> existe y antes do bloco?', y)

{
    console.log('>existe y dentro do bloco mas antes da declaração?', y)
    let y = 0
    console.log('>existe y dentro do bloco, mas depois da declaração?', y)
}

console.log('> existe y depois do bloco?', y)
