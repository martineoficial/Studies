// diferenças entre var, let e const

// var: escopo global, escopo de bloco e escopo de função
// a variável de tipo var pode ser declarada em escopo global (ou seja, vista por todo o  código), em escopo de bloco (ou seja, vista apenas dentro do bloco) e em escopo de função (ou seja, vista apenas dentro da função)

// escopo global
// limpando o console
console.clear(); // aqui limpamos o console, para que não fique poluído com mensagens de outras execuções

var x; // aqui declaramos uma variável de escopo global chamada x, ela não precisa ter um valor ao ser inicializada
let xLet; // aqui declaramos uma variável de escopo global chamada xLet, ela não precisa ter um valor ao ser inicializada
const xConst = 0; // aqui declaramos uma variável de escopo global chamada xConst, ela não pode ser reatribuída, e não pode ser inicializada sem valor

console.log("o valor da variável x é: " + x); // aqui imprimimos o valor da variável x, que é undefined, pois não atribuímos valor a ela ainda
console.log("o valor da variável xLet é: " + xLet); // aqui imprimimos o valor da variável xLet, que é undefined, pois não atribuímos valor a ela ainda
console.log("o valor da variável xConst é: " + xConst + ", pois foi declarada e já inicializada com o valor 0"); // aqui imprimimos o valor da variável xConst, que é 0, pois foi declarada e já inicializada com o valor 0

// podemos atribuir valor para a variável
x = 1; // aqui atribuímos o valor de 1 para a variável x
xLet = 2; // aqui atribuímos o valor de 2 para a variável xLet
// xConst = 3; // aqui tentamos atribuir o valor de 3 para a variável xConst, mas isso não é permitido, pois ela foi declarada como const e não pode ser reatribuída

console.log("o valor da variável x foi alterado para: " + x); // aqui imprimimos o valor da variável x, que é 1
console.log("o valor da variável xLet foi alterado para: " + xLet); // aqui imprimimos o valor da variável xLet, que é 2

// podemos também reatribuir valor a variável
x = 2; // aqui reatribuímos o valor de x de 1 para 2, passando a ter valor 2 agora
xLet = 3; // aqui reatribuímos o valor de xLet de 2 para 3, passando a ter valor 3 agora

console.log("o valor da variável x foi alterado para: " + x); // aqui imprimimos o valor da variável x, que é 2
console.log("o valor da variável xLet foi alterado para: " + xLet); // aqui imprimimos o valor da variável xLet, que é 3

// podemos declarar a variável e atribuir valor ao mesmo tempo
var y = 3; // aqui declaramos a variável y e atribuímos o valor 3 para ela
console.log("o valor da variável y é: " + y + ", pois foi declarada e já inicializada com o valor 3"); // aqui imprimimos o valor da variável y, que é 3
// podemos declarar a variável e atribuir valor ao mesmo tempo
let yLet = 4; // aqui declaramos a variável yLet e atribuímos o valor 4 para ela
console.log("o valor da variável yLet é: " + yLet + ", pois foi declarada e já inicializada com o valor 4"); // aqui imprimimos o valor da variável yLet, que é 4

// escopo de bloco
// a variável de tipo var pode ser declarada dentro de um bloco, mas ela ainda será vista fora do bloco
if (true) {
    var a = 5; // aqui declaramos uma variável de escopo de bloco chamada a, mas ela ainda pode ser vista fora do bloco
    let aLet = 6; // aqui declaramos uma variável de escopo de bloco chamada aLet, que só pode ser vista dentro do bloco
    const aConst = 7; // aqui declaramos uma variável de escopo de bloco chamada aConst, que só pode ser vista dentro do bloco

    console.log("o valor da variável a dentro do bloco é: " + a); // aqui imprimimos o valor da variável a, que é 5
    console.log("o valor da variável aLet dentro do bloco é: " + aLet); // aqui imprimimos o valor da variável aLet, que é 6
    console.log("o valor da variável aConst dentro do bloco é: " + aConst); // aqui imprimimos o valor da variável aConst, que é 7
}
console.log("o valor da variável a fora do bloco é: " + a); // aqui imprimimos o valor da variável a, que é 5, pois ela foi declarada com var e pode ser vista fora do bloco
// console.log("o valor da variável aLet fora do bloco é: " + aLet); // aqui tentamos imprimir o valor da variável aLet, mas ela não pode ser vista fora do bloco, então dará erro
// console.log("o valor da variável aConst fora do bloco é: " + aConst); // aqui tentamos imprimir o valor da variável aConst, mas ela não pode ser vista fora do bloco, então dará erro

// escopo de função
// a variável de tipo var pode ser declarada dentro de uma função, e ela só será vista dentro da função
function funcao() {
    var b = 10; // aqui declaramos uma variável de escopo de função chamada b, que só pode ser vista dentro da função
    let bLet = 11; // aqui declaramos uma variável de escopo de função chamada bLet, que só pode ser vista dentro da função
    const bConst = 12; // aqui declaramos uma variável de escopo de função chamada bConst, que só pode ser vista dentro da função

    console.log("o valor da variável b dentro da função é: " + b); // aqui imprimimos o valor da variável b, que é 10
    console.log("o valor da variável bLet dentro da função é: " + bLet); // aqui imprimimos o valor da variável bLet, que é 11
    console.log("o valor da variável bConst dentro da função é: " + bConst); // aqui imprimimos o valor da variável bConst, que é 12
}
funcao(); // aqui chamamos a função funcao, que imprime o valor da variável b
// console.log("o valor da variável b fora da função é: " + b); // aqui tentamos imprimir o valor da variável b, mas ela não pode ser vista fora da função, então dará erro
// console.log("o valor da variável bLet fora da função é: " + bLet); // aqui tentamos imprimir o valor da variável bLet, mas ela não pode ser vista fora da função, então dará erro
// console.log("o valor da variável bConst fora da função é: " + bConst); // aqui tentamos imprimir o valor da variável bConst, mas ela não pode ser vista fora da função, então dará erro

// imutabilidade da variável const
// a variável de tipo const não pode ser reatribuída, mas se ela for um objeto, podemos alterar suas propriedades
const obj = { a: 1 }; // aqui declaramos uma variável de escopo global chamada obj, que é um objeto
console.log("o valor da variável obj é: " + obj.a); // aqui imprimimos o valor da variável obj, que é 1
obj.a = 2; // aqui alteramos a propriedade a do objeto obj de 1 para 2
console.log("o valor da variável obj foi alterado para: " + obj.a); // aqui imprimimos o valor da variável obj, que é 2

// mas não podemos reatribuir o objeto
// obj = { a: 3 }; // aqui tentamos reatribuir o objeto obj, mas isso não é permitido, pois ele foi declarado como const e não pode ser reatribuído
// console.log("o valor da variável obj foi alterado para: " + obj.a); // aqui imprimimos o valor da variável obj, que é 2, pois não conseguimos reatribuir o objeto

// const pode ser reatribuído se for um array
const arr = [1, 2, 3]; // aqui declaramos uma variável de escopo global chamada arr, que é um array
console.log("o valor da variável arr é: " + arr); // aqui imprimimos o valor da variável arr, que é [1, 2, 3]
arr[0] = 4; // aqui alteramos o valor do primeiro elemento do array arr de 1 para 4
console.log("o valor da variável arr foi alterado para: " + arr); // aqui imprimimos o valor da variável arr, que é [4, 2, 3]

// mas não podemos reatribuir o array
// arr = [4, 5, 6]; // aqui tentamos reatribuir o array arr, mas isso não é permitido, pois ele foi declarado como const e não pode ser reatribuído
// console.log("o valor da variável arr foi alterado para: " + arr); // aqui imprimimos o valor da variável arr, que é [4, 2, 3], pois não conseguimos reatribuir o array

// arrow functions e this
// this é uma palavra-chave que se refere ao objeto atual, mas seu valor pode mudar dependendo de como a função é chamada
// em uma função normal, this se refere ao objeto global (ou seja, window no navegador ou global no Node.js)
function funcaoNormal() {
    console.log("this dentro da função normal é: " + this); // aqui imprimimos o valor de this, que é o objeto global
}
funcaoNormal(); // aqui chamamos a função funcaoNormal, que imprime o valor de this, que é o objeto global

// em uma arrow function, this se refere ao objeto que a contém
const funcaoArrow = () => {
    console.log("this dentro da função arrow é: " + this); // aqui imprimimos o valor de this, que é o objeto que contém a função
}
funcaoArrow(); // aqui chamamos a função funcaoArrow, que imprime o valor de this, que é o objeto que contém a função

// para ver como o valor de this muda dependendo de como a função é chamada, vamos criar um objeto com uma função normal e uma arrow function
const obj2 = {
    nome: "objeto",
    funcaoNormal: function () {
        console.log("this dentro da função normal do objeto é: " + this); // aqui imprimimos o valor de this, que é o objeto obj2
    },
    funcaoArrow: () => {
        console.log("this dentro da função arrow do objeto é: " + this); // aqui imprimimos o valor de this, que é o objeto global
    }
}
obj2.funcaoNormal(); // aqui chamamos a função funcaoNormal, que imprime o valor de this, que é o objeto obj2
obj2.funcaoArrow(); // aqui chamamos a função funcaoArrow, que imprime o valor de this, que é o objeto global