
import { AxiosApiAdapter } from "../../infraestructure/adapters/api/AxiosApiAdapter";
import { ItemAdapter } from "../../infraestructure/adapters/Item/ItemAdapter";
import { ItemTransform } from "../../infraestructure/adapters/Item/ItemTransform";

import { ItemRepositoryImpl } from "../../infraestructure/repositories/itemRepositoryImpl";


const getItemListUseCase = (param:string)=>{
    const AxiosApiInstance = new AxiosApiAdapter();
    AxiosApiInstance.setUrlPath('sites/MLA');
    const itemInternalTransform = new ItemTransform();
    const itemAdapter = new ItemAdapter(itemInternalTransform)
    const useCaseRepo = new ItemRepositoryImpl(AxiosApiInstance);
    
    return useCaseRepo.getItemList(param,itemAdapter);
}

export default getItemListUseCase;