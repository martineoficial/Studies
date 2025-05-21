// Spread e Rest Operators

// spread operator
// o spread operator é representado por três pontos (...) e é usado para espalhar os elementos de um array ou as propriedades de um objeto

// para arrays
const array1 = [1, 2, 3]; // aqui declaramos uma variável de escopo global chamada array1, que é um array
// podemos usar o spread operator para copiar os elementos de um array para outro
const array2 = [...array1]; // aqui declaramos uma variável de escopo global chamada array2, que é um array
console.log(`aqui usamos o spread operator para copiar os elementos de array1 para array2:
array2 recebe o valor de [...array1], que é ${array2}
`); // aqui imprimimos o valor da variável array2, que é um array

// podemos usar o spread operator para concatenar dois arrays
const array3 = [4, 5, 6]; // aqui declaramos uma variável de escopo global chamada array3, que é um array
const array4 = [...array1, ...array3]; // aqui declaramos uma variável de escopo global chamada array4, que é um array
console.log(`aqui usamos o spread operator para concatenar array1 e array3:
array4 recebe o valor de [...array1, ...array3], que é ${array4}
`); // aqui imprimimos o valor da variável array4, que é um array

// podemos usar o spread operator para adicionar elementos a um array
const array5 = [0, ...array1, 4, 5, 6]; // aqui declaramos uma variável de escopo global chamada array5, que é um array
console.log(`aqui usamos o spread operator para adicionar elementos a array1:
array5 recebe o valor de [0, ...array1, 4, 5, 6], que é ${array5}
`); // aqui imprimimos o valor da variável array5, que é um array

// podemos usar o spread operator para criar uma cópia rasa de um array
const array6 = [...array1]; // aqui declaramos uma variável de escopo global chamada array6, que é um array
console.log(`aqui usamos o spread operator para criar uma cópia rasa de array1:
array6 recebe o valor de [...array1], que é ${array6}
`); // aqui imprimimos o valor da variável array6, que é um array

// podemos usar o spread operator para criar uma cópia profunda de um array
const array7 = JSON.parse(JSON.stringify(array1)); // aqui declaramos uma variável de escopo global chamada array7, que é um array, usamos o JSON.parse(JSON.stringify(array1)) para criar uma cópia profunda de array1
console.log(`aqui usamos o spread operator para criar uma cópia profunda de array1:
array7 recebe o valor de JSON.parse(JSON.stringify(array1)), que é ${array7}
`); // aqui imprimimos o valor da variável array7, que é um array
// podemos usar o spread operator para criar um novo array a partir de um array existente

// para objetos
const objeto1 = { // aqui declaramos uma variável de escopo global chamada objeto1, que é um objeto
    nome: "João", // aqui declaramos uma propriedade chamada nome, que é uma string
    idade: 30, // aqui declaramos uma propriedade chamada idade, que é um número
    cidade: "São Paulo" // aqui declaramos uma propriedade chamada cidade, que é uma string
}
// podemos usar o spread operator para copiar as propriedades de um objeto para outro
const objeto2 = { ...objeto1 }; // aqui declaramos uma variável de escopo global chamada objeto2, que é um objeto
console.log(`aqui usamos o spread operator para copiar as propriedades de objeto1 para objeto2:
objeto2 recebe o valor de {...objeto1}, que é ${JSON.stringify(objeto2, null, 2)}
`); // aqui imprimimos o valor da variável objeto2, que é um objeto, usando JSON.stringify para converter o objeto em uma string

// podemos usar o spread operator para mesclar dois objetos
const objeto3 = { // aqui declaramos uma variável de escopo global chamada objeto3, que é um objeto
    profissao: "desenvolvedor", // aqui declaramos uma propriedade chamada profissao, que é uma string
    pais: "Brasil" // aqui declaramos uma propriedade chamada pais, que é uma string
}
const objeto4 = { ...objeto1, ...objeto3 }; // aqui declaramos uma variável de escopo global chamada objeto4, que é um objeto
console.log(`aqui usamos o spread operator para mesclar objeto1 e objeto3:
objeto4 recebe o valor de {...objeto1, ...objeto3}, que é ${JSON.stringify(objeto4, null, 2)}
`); // aqui imprimimos o valor da variável objeto4, que é um objeto, usando JSON.stringify para converter o objeto em uma string

// podemos usar o spread operator para adicionar propriedades a um objeto
const objeto5 = { ...objeto1, profissao: "desenvolvedor", pais: "Brasil" }; // aqui declaramos uma variável de escopo global chamada objeto5, que é um objeto
console.log(`aqui usamos o spread operator para adicionar propriedades a objeto1:
objeto5 recebe o valor de {...objeto1, profissao: "desenvolvedor", pais: "Brasil"}, que é ${JSON.stringify(objeto5, null, 2)}
`); // aqui imprimimos o valor da variável objeto5, que é um objeto, usando JSON.stringify para converter o objeto em uma string

// podemos usar o spread operator para criar uma cópia rasa de um objeto
const objeto6 = { ...objeto1 }; // aqui declaramos uma variável de escopo global chamada objeto6, que é um objeto
console.log(`aqui usamos o spread operator para criar uma cópia rasa de objeto1:
objeto6 recebe o valor de {...objeto1}, que é ${JSON.stringify(objeto6, null, 2)}
`); // aqui imprimimos o valor da variável objeto6, que é um objeto, usando JSON.stringify para converter o objeto em uma string

// podemos usar o spread operator para criar uma cópia profunda de um objeto
const objeto7 = JSON.parse(JSON.stringify(objeto1)); // aqui declaramos uma variável de escopo global chamada objeto7, que é um objeto, usamos o JSON.parse(JSON.stringify(objeto1)) para criar uma cópia profunda de objeto1
console.log(`aqui usamos o spread operator para criar uma cópia profunda de objeto1:
objeto7 recebe o valor de JSON.parse(JSON.stringify(objeto1)), que é ${JSON.stringify(objeto7, null, 2)}
`); // aqui imprimimos o valor da variável objeto7, que é um objeto, usando JSON.stringify para converter o objeto em uma string

// rest operator
// o rest operator é representado por três pontos (...) e é usado para agrupar os elementos de um array ou as propriedades de um objeto em um novo array ou objeto

// em funções
// podemos usar o rest operator para agrupar os parâmetros de uma função em um array
function soma(...numeros) { // aqui declaramos uma função chamada soma, que recebe um número indefinido de parâmetros
    return numeros.reduce((a, b) => a + b, 0); // aqui usamos o método reduce para somar os números do array numeros
} // aqui fechamos a função soma
console.log(`aqui usamos o rest operator para agrupar os parâmetros de uma função em um array:
soma recebe o valor de (...numeros), que é ${soma(1, 2, 3, 4, 5)}
`); // aqui imprimimos o valor da função soma, que é um número