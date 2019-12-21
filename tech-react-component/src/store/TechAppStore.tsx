import Axios, { AxiosInstance } from 'axios';
import { AlertStore } from './AlertStore';

export class TechAppStore {
    
    public alertStore?: AlertStore;
    public httpClient?: AxiosInstance

    constructor(httpClient?: AxiosInstance){
        this.alertStore = new AlertStore(this);
        if (httpClient){
            this.httpClient = httpClient;
        } else {
            this.httpClient = this.initializeHttpClient();
        }
    }

    initializeHttpClient(): AxiosInstance{
        const httpClient = Axios.create();
        httpClient.interceptors.response.use(
            (response)=>{
                return response
            }, (error)=>{
                this.alertStore?.alert(error)
                return Promise.reject(error);        
            }
        );
        return httpClient;
    }

}