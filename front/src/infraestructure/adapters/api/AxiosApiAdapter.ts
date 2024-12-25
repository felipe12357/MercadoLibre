import axios, { AxiosResponse } from "axios";
import { IApiAdapter } from "./IApiAdapter";
import { ISignAdapter } from "../signAdapter/ISignAdapter";


export class AxiosApiAdapter implements IApiAdapter {
    private API_URL = 'http://localhost:3000/api';

     constructor(private signAdapter:ISignAdapter) {
        
        axios.interceptors.response.use(
            (response: AxiosResponse) => {
                response.data =this.signAdapter.deleteSign(response.data)
                return response
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    } 

    async get<T>(param:string):Promise<T> {
        const response = await axios.get( `${this.API_URL}/${param}`);
        return response.data;  
    }
}