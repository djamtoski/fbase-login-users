import axios from 'axios';

export default class RequestService {
    constructor(data){

        this.baseUrl = data.baseUrl;
        this.axiosInstance = axios.create({
            baseUrl : this.baseUrl,
        })
    }

    execute(endpoint = ''){
        return this.axiosInstance.get(endpoint);
    }
}