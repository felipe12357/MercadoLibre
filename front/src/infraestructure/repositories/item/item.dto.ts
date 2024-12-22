import { Item, ItemDetail } from "../../../domain/item/types/item.model"

export type ItemListResponse ={
    categories:string[],
    items:Item[]
}

export type ItemDetailResponse = {
    item:ItemDetail
}

export type Author = {
    name:string,
    lastName:string
}