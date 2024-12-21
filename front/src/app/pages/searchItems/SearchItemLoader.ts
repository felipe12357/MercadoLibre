
import { ItemListResponse } from "../../../infraestructure/repositories/item/item.dto";
import getItemListUseCase from "../../../usecases/item/getItemListUseCase";

export const SearchItemLoader = (params:{search:string}):Promise<ItemListResponse>=>{
    return getItemListUseCase(params.search)
}