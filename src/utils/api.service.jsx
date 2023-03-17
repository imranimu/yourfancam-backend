import axios from 'axios';
import { getToken } from 'utils/Common';
import BaseService from 'utils/base.service.jsx';

class ApiService {

    constructor() {
        this.baseUrl = BaseService.getBaseUrl();
    }


    getCategories(path){

        const AccessToken = getToken();

        axios.get(this.baseUrl+ path, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer '+AccessToken
            } 
        }).then(res => {
            return res.data; 
        }).catch(error => {
            return error ;    
        });

        //return this.baseUrl+ path + ' ' + AccessToken;
    }
    
    
  
}

export default (new ApiService());