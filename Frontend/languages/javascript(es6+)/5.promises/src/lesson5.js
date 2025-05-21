// Assincronicidade

// Callbacks Hell, o problema do callback aninhado, digamos que temos uma função que faz uma requisição para um servidor e depois faz outra requisição para outro servidor, e assim por diante. Isso pode levar a um código difícil de ler e manter. Para resolver isso, podemos usar Promises, que são objetos que representam o resultado de uma operação assíncrona. Uma Promise pode estar em um dos três estados: pendente, resolvida ou rejeitada. Quando a operação é concluída com sucesso, a Promise é resolvida e o resultado é retornado. Se a operação falhar, a Promise é rejeitada e um erro é retornado. Podemos usar os métodos .then() e .catch() para lidar com o resultado ou erro da Promise.

// Exemplo de uso de Promises
// Criamos uma função que simula uma requisição assíncrona usando Promises. A função fetchData recebe uma URL e retorna uma Promise. Dentro da Promise, usamos setTimeout para simular um atraso de 2 segundos antes de resolver ou rejeitar a Promise. Se a URL for válida, a Promise é resolvida com os dados recebidos. Caso contrário, a Promise é rejeitada com um erro.
const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url) {
                resolve(`Dados recebidos de ${url}`);
            } else {
                reject('URL inválida');
            }
        }, 2000);
    });
};

// Usamos a função fetchData e lidamos com o resultado ou erro usando os métodos .then(), catch() e finally(). O método .then() é chamado quando a Promise é resolvida com sucesso, o método .catch() é chamado quando a Promise é rejeitada e o método .finally() é chamado independentemente do resultado da Promise.
fetchData('https://example.com')
    .then((data) => { // O método .then() é chamado quando a Promise é resolvida com sucesso
        console.log(data);
    })
    .catch((error) => { // O método .catch() é chamado quando a Promise é rejeitada
        console.error(error);
    })
    .finally(() => { // O método .finally() é chamado independentemente do resultado da Promise
        console.log('Requisição concluída');
    }
    );

// mostrando os estados da promise
const promise = fetchData('https://example.com');
console.log(promise); // Promise { <pending> }
// A Promise está pendente no início
setTimeout(() => {
    console.log(promise); // Promise { 'Dados recebidos de https://example.com' }
}, 3000);
// A Promise é resolvida após 2 segundos
// const promise2 = fetchData(''); // URL inválida
// console.log(promise2); // Promise { <pending> }
// setTimeout(() => {
//     console.log(promise2); // Promise { 'URL inválida' }
// }, 3000);
// A Promise é rejeitada após 2 segundos

// Resolvendo o problema do callback aninhado
// Podemos usar Promises para resolver o problema do callback aninhado. Em vez de passar uma função de callback para cada operação assíncrona, podemos encadear as Promises usando o método .then(). Isso torna o código mais legível e fácil de entender.
// Exemplo de uso de Promises para resolver o problema do callback aninhado
const fetchData1 = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url) {
                resolve(`Dados recebidos de ${url}`);
            } else {
                reject('URL inválida');
            }
        }, 2000);
    });
};
const fetchData2 = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url) {
                resolve(`Dados recebidos de ${url}`);
            } else {
                reject('URL inválida');
            }
        }, 2000);
    });
};
const fetchData3 = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url) {
                resolve(`Dados recebidos de ${url}`);
            } else {
                reject('URL inválida');
            }
        }, 2000);
    });
};
// Usamos as funções fetchData1, fetchData2 e fetchData3 e encadeamos as Promises usando o método .then(). Isso torna o código mais legível e fácil de entender.
fetchData1('https://example.com')
    .then((data) => {
        console.log(data);
        return fetchData2('https://example.com');
    })
    .then((data) => {
        console.log(data);
        return fetchData3('https://example.com');
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log('Requisição concluída');
    });
// O código acima é mais legível e fácil de entender do que o código com callbacks aninhados. Podemos ver claramente a sequência de operações assíncronas e como os resultados são passados de uma operação para outra. Além disso, podemos lidar com erros de forma mais simples, usando o método .catch() no final da cadeia de Promises.
// Isso torna o código mais limpo e fácil de manter. Além disso, podemos usar o método Promise.all() para executar várias Promises em paralelo e esperar que todas sejam resolvidas ou rejeitadas. Isso é útil quando precisamos fazer várias requisições assíncronas ao mesmo tempo e queremos esperar que todas sejam concluídas antes de continuar.

// Exemplo de uso do Promise.all()
const fetchData4 = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url) {
                resolve(`Dados recebidos de ${url}`);
            } else {
                reject('URL inválida');
            }
        }, 2000);
    });
}
const fetchData5 = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url) {
                resolve(`Dados recebidos de ${url}`);
            } else {
                reject('URL inválida');
            }
        }, 2000);
    });
}
const fetchData6 = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url) {
                resolve(`Dados recebidos de ${url}`);
            } else {
                reject('URL inválida');
            }
        }, 2000);
    });
}
// Usamos o método Promise.all() para executar várias Promises em paralelo e esperar que todas sejam resolvidas ou rejeitadas. O método Promise.all() recebe um array de Promises e retorna uma nova Promise que é resolvida quando todas as Promises do array são resolvidas ou rejeitada quando uma das Promises do array é rejeitada.
Promise.all([fetchData4('https://example.com'), fetchData5('https://example.com'), fetchData6('https://example.com')])
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log('Requisição concluída');
    });
// O código acima executa várias Promises em paralelo e espera que todas sejam resolvidas ou rejeitadas. Isso é útil quando precisamos fazer várias requisições assíncronas ao mesmo tempo e queremos esperar que todas sejam concluídas antes de continuar. Além disso, podemos usar o método Promise

// testando com dados reais
// Exemplo de uso de Promises com dados de uma API real
function getData() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erro na requisição');
                }
                return response.json();
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

getData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log('Requisição concluída');
    });