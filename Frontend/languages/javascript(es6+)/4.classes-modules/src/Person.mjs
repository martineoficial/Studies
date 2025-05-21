// classe Person

// esta classe é um template para criar objetos
export default class Person {
    // o construtor é um método especial que é chamado quando um objeto é criado
    constructor(name, age) {
        this.name = name; // this é uma referência ao objeto atual
        this.age = age;
    }

    // getters e setters são métodos especiais que permitem acessar e modificar propriedades
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }

    // métodos são funções que pertencem a um objeto
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    // métodos estáticos são funções que pertencem à classe e não a um objeto
    static sayGoodbye() {
        console.log('Goodbye!');
    }
}

export { Person }; // exportando a classe Person