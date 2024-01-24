class Data {
    constructor(httpClient) {
        this.httpClient = httpClient;
    };

    async getHtml(url) {
        const { data } = await this.httpClient.get(url);
        return data; 
    };

}

export default Data;