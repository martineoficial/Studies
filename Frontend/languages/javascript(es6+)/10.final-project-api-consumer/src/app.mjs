// final project - api consumer

import ApiService from "./api-service.mjs"; "./api-service.mjs"; // Importando a classe ApiService do arquivo api-service.mjs

console.log('Starting the API consumer application...'); // Log inicial para indicar que a aplicação está iniciando

const baseUrl = 'https://jsonplaceholder.typicode.com'; // URL base da API que será consumida

const endpoint = 'todos'; // Endpoint específico que queremos acessar na API

const apiService = new ApiService(baseUrl, endpoint); // Instanciando a classe ApiService com a URL base e o endpoint

const dataContainer = document.getElementById('data-container'); // Selecionando o elemento onde os dados serão exibidos

const showInContainer = (data) => {
    if (dataContainer) {

        // limpando o conteúdo anterior do dataContainer
        dataContainer.innerHTML = ''; // Limpando o conteúdo do elemento dataContainer antes de exibir novos dados
        console.log('Container limpo com sucesso.'); // Log de sucesso ao limpar o container

        dataContainer.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`; // Exibindo os dados formatados no elemento dataContainer
        console.log('Dados exibidos no container com sucesso.'); // Log de sucesso ao exibir os dados
    }
};

const getData = async () => {
    try {
        console.log('Fetching data from API...'); // Log para indicar que estamos buscando dados da API

        const response = await apiService.getData(); // Chamando o método getData da instância apiService para buscar os dados

        if (response) {
            console.log('Dados recebidos:', response); // Log dos dados recebidos da API

            setTimeout(() => {
                showInContainer(response); // Chamando a função showInContainer para exibir os dados no elemento dataContainer
            }, 500); // Aguardando 500 milissegundos antes de exibir os dados, para simular um atraso na exibição


        } else {
            console.warn('Nenhum dado recebido da API.'); // Log de aviso caso não haja dados
        }

    } catch (error) {
        console.error('Error ao buscar dados:', error); // Log de erro caso ocorra algum problema ao buscar os dados
    }
}

window.getData = getData; // Expondo a função getData no objeto window para que possa ser chamada globalmente