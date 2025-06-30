export default class ApiService {
    constructor(baseUrl, endpoint) {
        this.baseUrl = baseUrl;
        this.endpoint = endpoint;
    }

    async getData() {
        try {
            const response = await fetch(`${this.baseUrl}/${this.endpoint}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error ao obter dados:', error);
        }
    }
}