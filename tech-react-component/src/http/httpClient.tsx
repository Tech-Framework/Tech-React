import  Axios from 'axios';

export const httpClient = Axios.create();

httpClient.interceptors.response.use(
    (response)=>{
        return response
    }, (error)=>{
        return Promise.reject(error);        
    }
);