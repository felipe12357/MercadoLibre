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
    results:ItemDto[],
    filters:FilterDTO[]
}

export type FilterDTO = {
    id:string,
    name:string,
    type:string,
    values:FilerValueDTO[]
}

export type FilerValueDTO ={
    id:string,
    name:string,
    path_from_root:{id:string,name:string}[]
}

export type ItemDetailDto = ItemDto & {
    pictures:PictureDto[]
}

export type ItemDescriptionDto = {
    text:string,
    plain_text:string
}

export type ItemDetailDescriptionDto = ItemDetailDto & ItemDescriptionDto