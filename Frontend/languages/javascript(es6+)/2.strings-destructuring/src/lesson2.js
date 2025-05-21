// template literals e desestruturing

// interpolação de string
// podemos usar template literals para interpolar strings, ou seja, podemos colocar variáveis dentro de strings
const nome = "João"; // aqui declaramos uma variável de escopo global chamada nome, que é uma string
const idade = 30; // aqui declaramos uma variável de escopo global chamada idade, que é um número
const cidade = "São Paulo"; // aqui declaramos uma variável de escopo global chamada cidade, que é uma string
const profissao = "desenvolvedor"; // aqui declaramos uma variável de escopo global chamada profissao, que é uma string

// normalmente fazer isso seria assim
const frase = "Meu nome é " + nome + ", tenho " + idade + " anos, moro em " + cidade + " e sou " + profissao; // aqui declaramos uma variável de escopo global chamada frase, que é uma string
console.log(frase); // aqui imprimimos o valor da variável frase, que é "Meu nome é João, tenho 30 anos, moro em São Paulo e sou desenvolvedor"

// mas podemos fazer isso de forma mais simples usando template literals, que são strings delimitadas por crase (``) em vez de aspas simples ou duplas, e podemos usar ${} para interpolar variáveis dentro da string
const fraseComTemplateLiteral = `Meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`; // aqui declaramos uma variável de escopo global chamada fraseComTemplateLiteral, que é uma string
console.log(fraseComTemplateLiteral); // aqui imprimimos o valor da variável fraseComTemplateLiteral, que é "Meu nome é João, tenho 30 anos, moro em São Paulo e sou desenvolvedor"

// podemos usar template literals para criar strings multilinha
const fraseMultilinha = `Exemplo de string multilinha:
Meu nome é ${nome},
tenho ${idade} anos,
moro em ${cidade} e
sou ${profissao}`; // aqui declaramos uma variável de escopo global chamada fraseMultilinha, que é uma string
console.log(fraseMultilinha); // aqui imprimimos o valor da variável fraseMultilinha, que é "Meu nome é João, tenho 30 anos, moro em São Paulo e sou desenvolvedor"

// desestruturing
// desestruturing é uma forma de extrair valores de arrays ou propriedades de objetos e atribuí-los a variáveis
// com objetos
const objeto = { // aqui declaramos uma variável de escopo global chamada objeto, que é um objeto
    nome: "João", // aqui declaramos uma propriedade chamada nome, que é uma string
    idade: 30, // aqui declaramos uma propriedade chamada idade, que é um número
    cidade: "São Paulo", // aqui declaramos uma propriedade chamada cidade, que é uma string
    profissao: "desenvolvedor" // aqui declaramos uma propriedade chamada profissao, que é uma string
}
// podemos extrair as propriedades do objeto e atribuí-las a variáveis usando desestruturing
const {
    nome: nomeDesestruturado,
    idade: idadeDesestruturada,
    cidade: cidadeDesestruturada,
    profissao: profissaoDesestruturada
} = objeto; // aqui declaramos variáveis de escopo global chamadas nomeDesestruturado, idadeDesestruturada, cidadeDesestruturada e profissaoDesestruturada, que são strings
console.log(`aqui desestruturamos o objeto e para cada propriedade original, criamos uma nova variável com o mesmo nome, mas com o sufixo "Desestruturada" para diferenciá-las: 
nomeDesestruturado recebe o valor de objeto.nome, que é ${nomeDesestruturado},
idadeDesestruturada recebe o valor de objeto.idade, que é ${idadeDesestruturada},
cidadeDesestruturada recebe o valor de objeto.cidade, que é ${cidadeDesestruturada},
profissaoDesestruturada recebe o valor de objeto.profissao, que é ${profissaoDesestruturada}`); // aqui imprimimos o valor das variáveis desestruturadas, que são strings

// podemos extrair as propriedades do objeto e atribuí-las a variáveis com o mesmo nome usando desestruturing
const objeto2 = { // aqui declaramos uma variável de escopo global chamada objeto2, que é um objeto
    cor: "azul", // aqui declaramos uma propriedade chamada cor, que é uma string
    tamanho: "grande", // aqui declaramos uma propriedade chamada tamanho, que é uma string
    peso: "leve" // aqui declaramos uma propriedade chamada peso, que é uma string
}
const { cor, tamanho, peso } = objeto2; // aqui declaramos variáveis de escopo global chamadas cor, tamanho e peso, que são strings
console.log(`aqui desestruturamos o objeto2 e para cada propriedade original, criamos uma nova variável com o mesmo nome:
cor recebe o valor de objeto2.cor, que é ${cor},
tamanho recebe o valor de objeto2.tamanho, que é ${tamanho},
peso recebe o valor de objeto2.peso, que é ${peso}`); // aqui imprimimos o valor das variáveis desestruturadas, que são strings

// com arrays
const array = [1, 2, 3, 4, 5]; // aqui declaramos uma variável de escopo global chamada array, que é um array
// podemos extrair os valores do array e atribuí-los a variáveis usando desestruturing
const [a, b, c, d, e] = array; // aqui declaramos variáveis de escopo global chamadas a, b, c, d e e, que são números
console.log(`aqui desestruturamos o array e para cada valor original, criamos uma nova variável:
a recebe o valor de array[0], que é ${a},
b recebe o valor de array[1], que é ${b},
c recebe o valor de array[2], que é ${c},
d recebe o valor de array[3], que é ${d},
e recebe o valor de array[4], que é ${e}`); // aqui imprimimos o valor das variáveis desestruturadas, que são números

// podemos ignorar valores do array usando vírgulas
const [x, , y] = array; // aqui declaramos variáveis de escopo global chamadas x e y, que são números
console.log(`aqui desestruturamos o array ignorando o segundo valor:
x recebe o valor de array[0], que é ${x},
y recebe o valor de array[2], que é ${y}`); // aqui imprimimos o valor das variáveis desestruturadas, que são números

// podemos ignorar valores do array e atribuir o restante a uma nova variável usando o operador rest
const [a1, ...resto] = array; // aqui declaramos uma variável de escopo global chamada resto, que é um array
console.log(`aqui desestruturamos o array e atribuímos o restante a uma nova variável:
a1 recebe o valor de array[0], que é ${a1},
resto recebe o restante do array, que é ${resto}`); // aqui imprimimos o valor das variáveis desestruturadas, que são números

