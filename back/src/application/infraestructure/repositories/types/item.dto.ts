import { PictureDto } from "./picture.dto"

export type ItemDto ={
    id:string,
    title:string,
    price:number,
    currency_id:string,
    thumbnail:string,
    condition:string,
    category_id:string,
    shipping:{
        free_shipping:boolean
    }
}

export type responseItemDTO ={
    results:ItemDto[]
}

export type ItemDetailDto = ItemDto & {
    pictures:PictureDto[]
}

export type ItemDescriptionDto = {
    text:string,
    plain_text:string
}

export type ItemDetailDescriptionDto = ItemDetailDto & ItemDescriptionDto