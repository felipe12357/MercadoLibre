import { ItemDetail } from "../../../domain/item/types/item.model"
import getItemDetailUseCase from "../../../usecases/item/getItemDetailUseCase"

export const ItemLoader = (params:{id:string}):Promise<ItemDetail>=>{
    return getItemDetailUseCase(params.id)
}