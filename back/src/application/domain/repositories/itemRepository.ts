
import { IModelAdapter } from "../../infraestructure/adapters/Item/IModelAdapter";
import { ItemDetailDescriptionDto, responseItemDTO } from "../../infraestructure/repositories/types/item.dto";

import { ItemDetail } from "../entities/item/ItemDetail";
import { ItemCategoriesModel } from "../types/itemCategories.model";

export interface ItemRepository {
    getItemList(search:string,itemAdapter: IModelAdapter<responseItemDTO,ItemCategoriesModel>,numberOfElements:number):Promise<ItemCategoriesModel>
    getItem(id:string,itemAdapter: IModelAdapter<ItemDetailDescriptionDto,ItemDetail>):Promise<ItemDetail>
}