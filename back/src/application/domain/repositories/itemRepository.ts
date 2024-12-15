
import { IModelAdapter, IModelArrayAdapter } from "../../infraestructure/adapters/Item/IModelAdapter";
import { ItemDetailDescriptionDto, ItemDto } from "../../infraestructure/repositories/types/item.dto";
import { Item } from "../entities/Item";
import { ItemDetail } from "../entities/ItemDetail";
import { ItemCategoriesModel } from "../types/itemCategories.model";

export interface ItemRepository {
    getItemList(search:string,itemAdapter: IModelArrayAdapter<ItemDto,Item>):Promise<ItemCategoriesModel>
    getItem(id:string,itemAdapter: IModelAdapter<ItemDetailDescriptionDto,ItemDetail>):Promise<ItemDetail>
}