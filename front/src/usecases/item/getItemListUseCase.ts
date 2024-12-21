import { AxiosApiAdapter } from "../../infraestructure/adapters/api/AxiosApiAdapter";
import { SignAdapter } from "../../infraestructure/adapters/signAdapter/signAdapter";
import { ItemRepositoryImpl } from "../../infraestructure/repositories/item/itemRepositoryImp";

const getItemListUseCase = (param:string)=>{
    const signAdapter = new SignAdapter();
    const AxiosApiInstance = new AxiosApiAdapter(signAdapter);

    const useCaseRepo = new ItemRepositoryImpl(AxiosApiInstance);
    return useCaseRepo.getItemList(param);
}

export default getItemListUseCase;