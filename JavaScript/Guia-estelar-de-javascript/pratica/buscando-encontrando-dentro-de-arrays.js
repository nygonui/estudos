/* 
    # Buscandando e contando dados em Arrays #

    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

    * Contar o número de categorias e o número de livros em cada categoria
    * Contar o número de autores
    * Mostrar livros do autor Auguto Cury
    * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
    
*/

const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Classon",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubistituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey"
            },
        ],
    },
]
// a const booksByCategory = [] é um arrya que está guardando dois objetos, e em cada objeto temos duas propriedades, uma sendo category que é tipo string e books que é tipo Array

const totalCategories = booksByCategory.length
//estamos pegando o tamanho do Array, como são dois objetos que temos dentro dele a resposta desta const totalCategories será 2

console.log(totalCategories)
for(let category of booksByCategory){
    console.log("Total de livros da categoria: ", category.category)
    console.log(category.books.length)
}
//o laço for ... of 
//faz com que a let category rode dentro do array booksByCategory
// o primeiro console.log, esta usando a variavel criada para pegar os valores do array e atribuindo o atributo category de cada objeto de dentro do array
// o segundo console.log esta usando a variavel criado para pegar os dados do array, atribuindo o atributo books junto do atributo length, como books é um array isso é possível fazer, e mostrará o tamanho deste array

function countAuthors(){
    let authors = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author)== -1){
                authors.push(book.author)
            }
        }
    }

    console.log("Total de autores: ", authors.length)
}

countAuthors();
// function countAuthors() - serve para contar quantos autores temos dentro do array booksByCategory
// começa declarando um array (let authors = []) que servirá para armazenar os autores que pegaremos dentro do array principal 
// o primeiro laço serve para rodar dentro do array principal, entrar dentro dos objetos com category of booksByCategory
// o segundo laço já é pra rodar dentro do array books dentro de cada categoria (categoy.books)
// com esses laços um dentro do outro o programa executará da seguinte forma, o primeiro laço vai entrar no primeiro objeto, vai começar a rodar o segundo laço, este laço vai rodar dentro de category.books (category sendo uma váriavel que usamos no laço anterior para armazenar cada objeto dentro do array principal) quando acabar toda os livros do primeiro objeto ele irá para segunda categoria (segundo objeto) entrará no atributo books (que é um array, assim como no primeiro objeto) e vai rodar dentro dele vendo quantos livros tem dentro dele
// o if dentro do segundo laço serve para verificar se o livro em questão já foi adicionado ao array iniciado no começo da função, com o atributo indexOf(x) sendo x um parâmetro (que nesse caso é um nome de um livro), ele irá ver dentro do array se esse livro estará la, se ele estiver, retornará o valor da posição dele, se não responderá o valor -1, assim entrando no if e adicionando-o no array em questão com o método push(), que adiciona sempre no final do array

function booksOfAgustoCury(){
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === 'Augusto Cury'){
                books.push(book.title)
            }
        }
    }

    console.log("Livros do autor: ", books)
}

booksOfAgustoCury();

function booksOfAuthor(author){
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === author){
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor("George S. Classon")