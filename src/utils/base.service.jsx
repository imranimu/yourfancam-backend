import axios from 'axios';
class BaseService {
  constructor() {
    this.baseUrl = "https://services.yourfancam.com/api/v1/";
  }

  getData(path) {
    let url = `${this.baseUrl}${path}`;
    return axios.get(`${url}`);
  }

  postData(path) {
    let url = `${this.baseUrl}${path}`;
    return axios.post(`${url}`);
  }

  putData(path , data) {

    let url = `${this.baseUrl}${path}`;

    return axios.put( `${url}`, `${data}`);
        
  }

  getBaseUrl(){
    return `${this.baseUrl}`
  }
  
}

export default (new BaseService());