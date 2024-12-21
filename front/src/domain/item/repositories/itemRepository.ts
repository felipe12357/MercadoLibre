import { ItemListResponse } from "../../../infraestructure/repositories/item/item.dto"
import { ItemDetail } from "../types/item.model"

export interface ItemRepository {
    getItemList(search:string):Promise<ItemListResponse>
    getItem(id:string):Promise<ItemDetail>
}