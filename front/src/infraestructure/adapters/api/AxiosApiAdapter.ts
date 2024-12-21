import axios, { AxiosResponse } from "axios";
import { IApiAdapter } from "./IApiAdapter";
import { SignAdapter } from "../signAdapter/signAdapter";


export class AxiosApiAdapter implements IApiAdapter {
    private API_URL = 'http://localhost:3000/api';

     constructor(private signAdapter:SignAdapter) {
        
        // Configurar el interceptor de respuesta
        axios.interceptors.response.use(
            (response: AxiosResponse) => {
                response.data =this.signAdapter.deleteSign(response.data)
                return response
            },
            (error) => {
                // Aquí puedes manejar los errores globalmente, si es necesario.
                return Promise.reject(error);
            }
        );
    } 

    async get<T>(param:string):Promise<T> {
        const response = await axios.get( `${this.API_URL}/${param}`);
        return response.data;  
    }
}