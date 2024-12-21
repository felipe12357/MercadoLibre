import { Author } from "../../repositories/item/item.dto";


export class SignAdapter {

    deleteSign(element:{author:Author}){
        const { author, ...newElement } = element;
        return newElement; 
    }
}