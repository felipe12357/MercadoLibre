import { PriceModel } from "../../types/price.model";
import { Item } from "./Item";

export class ItemDetail extends Item {

    constructor(id:string, title:string, price:PriceModel, picture:string,condition:string,
        free_shipping:boolean,sold_quantity:number,description:string ){
            super(id, title, price, picture,condition,free_shipping)
    }
    
}