import { PriceModel } from "./price.model"

export type Item ={
    id:string, 
    title:string, 
    price:PriceModel 
    picture:string,
    condition:string,
    free_shipping:boolean
}

export type ItemDetail = Item & {
    sold_quantity:number,
    description:string
}