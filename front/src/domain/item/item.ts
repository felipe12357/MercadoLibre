export interface ItemServiceI {
    getItems:(search:string)=>Promise<any>
    getItem:(id:string)=>Promise<any>
}