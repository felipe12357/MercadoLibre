
import { IModelAdapter, IModelArrayAdapter } from "../../infraestructure/adapters/Item/IModelAdapter";
import { ItemDetailDescriptionDto, ItemDto, responseItemDTO } from "../../infraestructure/repositories/types/item.dto";
import { Item } from "../entities/item/Item";

import { ItemDetail } from "../entities/item/ItemDetail";
import { ItemCategoriesModel } from "../types/itemCategories.model";

export interface ItemRepository {
    getItemList(search:string,itemAdapter: IModelAdapter<responseItemDTO,ItemCategoriesModel>):Promise<ItemCategoriesModel>
    getItem(id:string,itemAdapter: IModelAdapter<ItemDetailDescriptionDto,ItemDetail>):Promise<ItemDetail>
}