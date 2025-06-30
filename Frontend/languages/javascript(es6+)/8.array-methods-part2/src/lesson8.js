// métodos de array

// reduce - para cada elemento faça algo e retorne um único valor
// vamos usar o reduce para somar os elementos de um array
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum); // 15

// find - encontra o primeiro elemento que satisfaz a condição
const people = [
    { name: 'Diana', age: 30 },
    { name: 'John', age: 25 },
    { name: 'Jane', age: 35 }
];
const foundPerson = people.find(person => person.age > 30);
console.log(foundPerson); // { name: 'Jane', age: 35 }

// some - verifica se pelo menos um elemento satisfaz a condição
const hasAdult = people.some(person => person.age >= 18);
console.log(hasAdult); // true

// every - verifica se todos os elementos satisfazem a condição
const allAdults = people.every(person => person.age >= 18);
console.log(allAdults); // false