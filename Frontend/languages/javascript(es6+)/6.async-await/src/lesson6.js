// async await

// usamos async await para lidar com Promises de forma mais simples
// async await é uma forma de escrever código assíncrono de forma mais legível

// podemos criar funções assíncronas usando a palavra-chave async
async function funcaoAssincrona(url) {
    // dentro de uma função assíncrona, podemos usar a palavra-chave await que significa aguardar uma Promise ser resolvida ou rejeitada
    // a palavra-chave await só pode ser usada dentro de funções assíncronas
    // a palavra-chave await faz com que o código aguarde a Promise ser resolvida ou rejeitada antes de continuar a execução
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url) {
                resolve(`Dados recebidos de ${url}`);
            } else {
                reject('URL inválida');
            }
        }, 2000);
    }
    );
    // usamos a palavra-chave await para aguardar a Promise ser resolvida ou rejeitada
    try {
        const data = await promise;
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

// chamamos a função assíncrona
funcaoAssincrona('https://example.com');

// exemplo de uso de async await com dados de uma API real
async function getData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro ao buscar dados');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

// chamamos a função assíncrona
getData('https://jsonplaceholder.typicode.com/posts/1');
