
import { Item } from "../../../domain/entities/item/Item";
import { ItemDetail } from "../../../domain/entities/item/ItemDetail";
import { ItemDetailDescriptionDto, ItemDto } from "../../repositories/types/item.dto";
import { IModelAdapter } from "./IModelAdapter";

export class ItemDetailAdapter implements IModelAdapter<ItemDetailDescriptionDto,ItemDetail> {

    //no encontre este valor en los api por ello lo asigno como constante
    private SOLD_QUANTITY=5;

    constructor(private itemTransform:IModelAdapter<ItemDto,Item>){
        }

   transform(data:ItemDetailDescriptionDto):ItemDetail {
        const val:ItemDetail = {...this.itemTransform.transform(data),
                picture:data.pictures[0],
                description:data.plain_text,
                sold_quantity:this.SOLD_QUANTITY
            }
        return val;
    }
}
