// métodos de array

// forEach - para cada elemento faça algo
// vamos usar o forEach para imprimir os elementos de um array
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
    console.log(number);
}); // 1, 2, 3, 4, 5

// vamos usar o forEach para imprimir os elementos de um array de objetos
const users = [
    { name: 'Lucas', age: 25 },
    { name: 'Maria', age: 30 },
    { name: 'João', age: 20 },
];
users.forEach((user) => {
    console.log(user.name);
}); // Lucas, Maria, João

// vamos usar o forEach para somar os elementos de um array
const numbers2 = [1, 2, 3, 4, 5];
let sum = 0;
numbers2.forEach((number) => {
    sum += number;
});
console.log(sum); // 15

// map - para cada elemento faça algo e retorne um novo array
// vamos usar o map para criar um novo array com os elementos de um array
const numbers3 = [1, 2, 3, 4, 5];
const numbers4 = numbers3.map((number) => {
    return number * 2;
});
console.log(numbers4); // [2, 4, 6, 8, 10]

// vamos usar o map para criar um novo array com os elementos de um array de objetos
const users2 = [
    { name: 'Lucas', age: 25 },
    { name: 'Maria', age: 30 },
    { name: 'João', age: 20 },
];
const users3 = users2.map((user) => {
    return user.name;
});
console.log(users3); // ['Lucas', 'Maria', 'João']

// vamos usar o map para criar um novo array com os elementos de um array de objetos
const users4 = [
    { name: 'Lucas', age: 25 },
    { name: 'Maria', age: 30 },
    { name: 'João', age: 20 },
];
const users5 = users4.map((user) => {
    return {
        name: user.name,
        age: user.age * 2,
    };
});
console.log(users5); // [{ name: 'Lucas', age: 50 }, { name: 'Maria', age: 60 }, { name: 'João', age: 40 }]

// filter - para cada elemento faça algo e retorne um novo array com os elementos que passaram no filtro
// vamos usar o filter para criar um novo array com os elementos de um array
const numbers5 = [1, 2, 3, 4, 5];
const numbers6 = numbers5.filter((number) => {
    return number > 2;
});
console.log(numbers6); // [3, 4, 5]

// vamos usar o filter para criar um novo array com os elementos de um array de objetos
const users6 = [
    { name: 'Lucas', age: 25 },
    { name: 'Maria', age: 30 },
    { name: 'João', age: 20 },
];
const users7 = users6.filter((user) => {
    return user.age > 25;
});
console.log(users7); // [{ name: 'Maria', age: 30 }]

// vamos usar o filter para criar um novo array com os elementos de um array de objetos
const users8 = [
    { name: 'Lucas', age: 25 },
    { name: 'Maria', age: 30 },
    { name: 'João', age: 20 },
];
const users9 = users8.filter((user) => {
    return user.name.startsWith('L');
});
console.log(users9); // [{ name: 'Lucas', age: 25 }]