// for ... of

let name = 'Nicolas'
let names = ['Beto', 'Peu', 'Tuka', 'Sapo']

for(let name of names){
    console.log(name)
}

/* 
    Explicação:
    1 - a variavel name = 'Nicolas' é difente da váriavel name de dentro do for, escopos diferentes
    2 - tradução do problema: o laço vai rodar enquanto a váriavel name pegar os dados do Array names
    e em seguida vai imprimir um de cada vez
*/