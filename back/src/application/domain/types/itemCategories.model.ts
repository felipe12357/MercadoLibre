import { Item } from "../entities/Item"

export type ItemCategoriesModel = {
    items:Item[],
    categories:string[]
}