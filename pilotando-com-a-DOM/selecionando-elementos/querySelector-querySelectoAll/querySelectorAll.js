// querySelectoAll()

const element = document.querySelectoAll('.one')

element.forEach(el => console.log(el))

// a diferença do querySelectorAll pro getElementByClassName é o tipo de dado que cada método retorna
// o querySelectoAll retorna um NodeList
// o getElementByClassName retorna um HTMLColection

//com um NodeList é possível usar o método forEach