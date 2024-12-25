import { Author } from "../../repositories/item/item.dto";
import { ISignAdapter } from "./ISignAdapter";


export class SignAdapter implements ISignAdapter{

    deleteSign<T extends {author:Author}>(element:T): Omit<T, 'author'>{
        const { author, ...newElement } = element;
        return newElement; 
    }
}