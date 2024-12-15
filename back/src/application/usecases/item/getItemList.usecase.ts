
import { AxiosApiAdapter } from "../../infraestructure/adapters/api/AxiosApiAdapter";
import { ItemAdapter } from "../../infraestructure/adapters/Item/ItemAdapter";

import { ItemRepositoryImpl } from "../../infraestructure/repositories/itemRepositoryImpl";


const getItemListUseCase = (param:string)=>{
    const AxiosApiInstance = new AxiosApiAdapter();
    AxiosApiInstance.setUrlPath('sites/MLA');
    const itemAdapter = new ItemAdapter()
    const useCaseRepo = new ItemRepositoryImpl(AxiosApiInstance);
    
    return useCaseRepo.getItemList(param,itemAdapter);
}

export default getItemListUseCase;