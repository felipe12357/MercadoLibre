import axios from "axios";
import { IApiAdapter } from "./IApiAdapter";


export class AxiosApiAdapter implements IApiAdapter {
    private API_URL = 'https://api.mercadolibre.com/';

    setUrlPath(url:string) {
        this.API_URL+=url;
    }

    async get<T>(param:string):Promise<T> {
        const response = await axios.get( `${this.API_URL}/${param}`);
        return response.data;  
    }
}