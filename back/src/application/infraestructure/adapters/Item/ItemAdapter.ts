

import { Item } from "../../../domain/entities/item/Item";
import { ItemCategoriesModel } from "../../../domain/types/itemCategories.model";
import { ItemDto } from "../../repositories/types/item.dto";
import { IModelAdapter, IModelArrayAdapter } from "./IModelAdapter";

export class ItemAdapter implements IModelArrayAdapter<ItemDto,ItemCategoriesModel>  {

    constructor(private itemTransform:IModelAdapter<ItemDto,Item>){
    }

    transform(dataList:ItemDto[]) {

        const items:Item[] =[];
        const categories:string[] = [];

        dataList.forEach(item =>{
            items.push(this.itemTransform.transform(item))
            categories.push(item.category_id);
        })
        
        const result:ItemCategoriesModel ={
            items,
            categories:this.sortCategories(categories)
        }
        return result;
    } 

    private sortCategories(categories:string[]):string[]{
        const countObjects = categories.reduce((acc: { [key: string]: number }, num:string) => {
            acc[num] = (acc[num] || 0) + 1;
            return acc;
          }, {});

        const sortedCategories = Object.keys(countObjects)
        .sort((a, b) => countObjects[b] - countObjects[a]);

        return sortedCategories
    }
}