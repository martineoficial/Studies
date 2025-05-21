// class Student

// esta classe é um template para criar objetos

// importando a classe Person
import Person from './Person.mjs';

// a classe Student herda da classe Person um método especial que permite que uma classe herde propriedades e métodos de outra classe, usando a palavra-chave extends
export default class Student extends Person {
    // o construtor é um método especial que é chamado quando um objeto é criado
    constructor(name, age, studentId) {
        super(name, age); // chama o construtor da classe pai (Person)
        this.studentId = studentId; // this é uma referência ao objeto atual
    }

    // getters e setters são métodos especiais que permitem acessar e modificar propriedades
    getStudentId() {
        return this.studentId;
    }
    setStudentId(studentId) {
        this.studentId = studentId;
    }

    // métodos são funções que pertencem a um objeto
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. My student ID is ${this.studentId}.`);
    }

    // métodos estáticos são funções que pertencem à classe e não a um objeto
    static sayGoodbye() {
        console.log('Goodbye!');
    }
}

export { Student }; // exportando a classe Student