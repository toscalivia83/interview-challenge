export class ApiClient {
  host;

  constructor(baseUrl) {
    this.host = baseUrl;
  }

  async getItems() {
    const uri = `${this.host}/items`;
    const response = await fetch(uri);
    try {
      return response.json();
    } catch (e) {
      console.log("Error", e);
    }
  }
}

export default new ApiClient(`${window.location.protocol}//${window.location.host}`);