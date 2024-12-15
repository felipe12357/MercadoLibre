export interface IApiAdapter {
    get<T>(url:string):Promise<T>
}

