// classes and modules

// classes são templates para criar objetos
// classes são definidas com a palavra-chave class
// classes podem ter métodos e propriedades
// classes podem ter construtores
// classes podem ter herança
// classes podem ter getters e setters
// classes podem ter métodos estáticos

import { Person } from "./Person.mjs"; // importando a classe Person
import { Student } from "./Student.mjs"; // importando a classe Student

// criando um objeto da classe Person
const person = new Person("Diana", 30); // criando um objeto da classe Person

console.log(person); // chamando o método getName da classe Person

console.log(person.getName()); // chamando o método getName da classe Person
console.log(person.getAge()); // chamando o método getAge da classe Person

person.setName("Jane"); // chamando o método setName da classe Person
person.setAge(25); // chamando o método setAge da classe Person
console.log(person.getName()); // chamando o método getName da classe Person
console.log(person.getAge()); // chamando o método getAge da classe Person

person.sayHello(); // chamando o método sayHello da classe Person
Person.sayGoodbye(); // chamando o método estático sayGoodbye da classe Person

// criando um objeto da classe Student
const student = new Student("Alice", 20, "123456"); // criando um objeto da classe Student
console.log(student); // chamando o método getName da classe Student

console.log(student.getName()); // chamando o método getName da classe Student
console.log(student.getAge()); // chamando o método getAge da classe Student

student.setName("Bob"); // chamando o método setName da classe Student
student.setAge(22); // chamando o método setAge da classe Student
console.log(student.getName()); // chamando o método getName da classe Student
console.log(student.getAge()); // chamando o método getAge da classe Student

student.setStudentId("654321"); // chamando o método setStudentId da classe Student
console.log(student.getStudentId()); // chamando o método getStudentId da classe Student

student.sayHello(); // chamando o método sayHello da classe Student
Student.sayGoodbye(); // chamando o método estático sayGoodbye da classe Student