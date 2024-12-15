
import { AxiosApiAdapter } from "../../infraestructure/adapters/api/AxiosApiAdapter";
import { ItemDetailAdapter } from "../../infraestructure/adapters/Item/ItemDetailAdapter";
import { ItemRepositoryImpl } from "../../infraestructure/repositories/itemRepositoryImpl";


const getItemUseCase = async (param:string)=>{
    const AxiosApiInstance = new AxiosApiAdapter();
    const itemAdapter = new ItemDetailAdapter()
    const useCaseRepo = new ItemRepositoryImpl(AxiosApiInstance);
    const item = await useCaseRepo.getItem(param,itemAdapter);
    return {item};
}

export default getItemUseCase;