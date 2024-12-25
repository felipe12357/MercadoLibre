
import { ItemRepository } from "../../domain/repositories/itemRepository";

import { ItemDescriptionDto, ItemDetailDescriptionDto, ItemDetailDto, ItemDto, responseItemDTO } from "./types/item.dto";
import { IApiAdapter } from "../adapters/api/IApiAdapter";
import { IModelAdapter } from "../adapters/Item/IModelAdapter";
import { ItemCategoriesModel } from "../../domain/types/itemCategories.model";
import { ItemDetail } from "../../domain/entities/item/ItemDetail";



export class ItemRepositoryImpl implements ItemRepository {

    constructor(private apiAdapter:IApiAdapter) {
    }

    async getItemList(search:string,itemAdapter: IModelAdapter<responseItemDTO,ItemCategoriesModel>,numberOfElements:number) {
        const data = await this.apiAdapter.get(`search?q=${search}`) as responseItemDTO;
        data.results.length = numberOfElements;
        return itemAdapter.transform(data)
    }

    async getItem(id:string,itemAdapter: IModelAdapter<ItemDetailDescriptionDto,ItemDetail>) {

        const data = await Promise.all([
                    this.apiAdapter.get<ItemDetailDto>(`/items/${id}`),          
                    this.apiAdapter.get<ItemDescriptionDto>(`/items/${id}/description`)
        ])

        return itemAdapter.transform({...data[0],...data[1]})
    }
}