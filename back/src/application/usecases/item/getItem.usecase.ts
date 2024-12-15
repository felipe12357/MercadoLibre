
import { AxiosApiAdapter } from "../../infraestructure/adapters/api/AxiosApiAdapter";
import { ItemDetailAdapter } from "../../infraestructure/adapters/Item/ItemDetailAdapter";
import { ItemTransform } from "../../infraestructure/adapters/Item/ItemTransform";
import { ItemRepositoryImpl } from "../../infraestructure/repositories/itemRepositoryImpl";


const getItemUseCase = async (param:string)=>{
    const AxiosApiInstance = new AxiosApiAdapter();
    const itemInternalTransform = new ItemTransform();
    const itemAdapter = new ItemDetailAdapter(itemInternalTransform)
    const useCaseRepo = new ItemRepositoryImpl(AxiosApiInstance);
    const item = await useCaseRepo.getItem(param,itemAdapter);
    return {item};
}

export default getItemUseCase;