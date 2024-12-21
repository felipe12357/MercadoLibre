import { ItemRepository } from "../../../domain/item/repositories/itemRepository";
import { ItemDetail } from "../../../domain/item/types/item.model";
import { IApiAdapter } from "../../adapters/api/IApiAdapter";
import { ItemListResponse } from "./item.dto";

export class ItemRepositoryImpl implements ItemRepository {

    constructor(private apiAdapter:IApiAdapter) {
    }

    async getItemList(search:string):Promise<ItemListResponse> {
        const data = await this.apiAdapter.get<ItemListResponse>(`items?search=${search}`);
        return data;
    }

    async getItem(id:string):Promise<ItemDetail> {
        const data = await this.apiAdapter.get<ItemDetail>(`items/${id}`);
        return data;
    }
}