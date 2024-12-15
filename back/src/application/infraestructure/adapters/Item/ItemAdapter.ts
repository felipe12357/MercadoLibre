

import { Item } from "../../../domain/entities/item/Item";
import { ItemCategoriesModel } from "../../../domain/types/itemCategories.model";
import { ItemDto } from "../../repositories/types/item.dto";
import { IModelArrayAdapter } from "./IModelAdapter";
import { ItemTransform } from "./ItemTransform";

export class ItemAdapter extends ItemTransform implements IModelArrayAdapter<ItemDto,ItemCategoriesModel>  {

    transform(dataList:ItemDto[]) {

        const categories:Set<string> = new Set();
        const items:Item[] =[];

        dataList.forEach(item =>{
            items.push(super.format(item))
            categories.add(item.category_id)
        })
        
        const result:ItemCategoriesModel ={
            items,
            categories:Array.from(categories)
        }
        return result;
    }          
}