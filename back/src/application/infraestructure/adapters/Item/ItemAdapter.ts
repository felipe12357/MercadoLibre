

import { Item } from "../../../domain/entities/item/Item";
import { ItemCategoriesModel } from "../../../domain/types/itemCategories.model";
import { ItemDto } from "../../repositories/types/item.dto";
import { IModelAdapter, IModelArrayAdapter } from "./IModelAdapter";

export class ItemAdapter implements IModelArrayAdapter<ItemDto,ItemCategoriesModel>  {

    constructor(private itemTransform:IModelAdapter<ItemDto,Item>){
    }

    transform(dataList:ItemDto[]) {

        const categories:Set<string> = new Set();
        const items:Item[] =[];

        dataList.forEach(item =>{
            items.push(this.itemTransform.transform(item))
            categories.add(item.category_id)
        })
        
        const result:ItemCategoriesModel ={
            items,
            categories:Array.from(categories)
        }
        return result;
    } 
}