import { Item, ItemDetail } from "../../../domain/item/types/item.model"

export type ItemListDto ={
    author:Author,
    categories:string[],
    items:Item[]
}

export type ItemDetailDto = {
    author:Author,
    item:ItemDetail
}

export type ItemListResponse = Omit<ItemListDto, "author" >;
export type ItemDetailResponse = Omit<ItemDetail,'author'>;

export type Author = {
    name:string,
    lastName:string
}