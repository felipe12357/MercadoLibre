import { Author } from "../../repositories/item/item.dto";

export interface ISignAdapter {
        deleteSign<T extends { author: Author }>(element:T): Omit<T, 'author'>
}