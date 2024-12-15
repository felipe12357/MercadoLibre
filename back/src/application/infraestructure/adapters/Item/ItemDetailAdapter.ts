
import { ItemDetail } from "../../../domain/entities/item/ItemDetail";
import { ItemDetailDescriptionDto } from "../../repositories/types/item.dto";
import { IModelAdapter } from "./IModelAdapter";
import { ItemTransform } from "./ItemTransform";

export class ItemDetailAdapter extends ItemTransform implements IModelAdapter<ItemDetailDescriptionDto,ItemDetail> {

    //no encontre este valor en los api por ello lo asigno como constante
    private SOLD_QUANTITY=5;

   transform(data:ItemDetailDescriptionDto):ItemDetail {
        const val:ItemDetail = {...super.format(data),
                picture:data.pictures[0],
                description:data.plain_text,
                sold_quantity:this.SOLD_QUANTITY
            }
        return val;
    }
}
