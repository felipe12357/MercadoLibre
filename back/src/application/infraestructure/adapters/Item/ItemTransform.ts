
import { Item } from "../../../domain/entities/item/Item";
import { ItemDto } from "../../repositories/types/item.dto";
import { IModelAdapter } from "./IModelAdapter";


export class ItemTransform implements IModelAdapter<ItemDto,Item> {
    private DECIMAL_NUMBER = 0; //NO ENCONTRE ESTE VALOR EN EL ENDPOINT POR ESO LO ASIGNO COMO CONSTANTE

    transform(item:ItemDto):Item {
        const {title,id,condition} =item
        return {
            title,id,condition,
            price:{
                amount: item.price,
                currency:item.currency_id,
                decimals:this.DECIMAL_NUMBER,
            },
            picture:item.thumbnail,
            free_shipping:item.shipping.free_shipping
        }
    } 
}
