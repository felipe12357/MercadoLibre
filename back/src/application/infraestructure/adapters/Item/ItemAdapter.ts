

import { Item } from "../../../domain/entities/item/Item";
import { ItemCategoriesModel } from "../../../domain/types/itemCategories.model";
import { FilterDTO, ItemDto, responseItemDTO } from "../../repositories/types/item.dto";
import { IModelAdapter } from "./IModelAdapter";

export class ItemAdapter implements IModelAdapter<responseItemDTO,ItemCategoriesModel>  {

    constructor(private itemTransform:IModelAdapter<ItemDto,Item>){
    }

    transform(data:responseItemDTO) {

        const items:Item[] =[];

        data.results.forEach(item =>{
            items.push(this.itemTransform.transform(item))
        })
      
        const result:ItemCategoriesModel ={
            items,
            categories: this.getCategories(data.filters)
        }
        return result;
    } 

    private getCategories(data:FilterDTO[]):string[]{
        const categories = data.filter(filter => filter.id === 'category').map(data => data.values).flat()
        .map(category => category.path_from_root).flat().map(val => val.name);

        return this.sortCategories(categories)
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