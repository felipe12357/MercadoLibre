import { AxiosApiAdapter } from "../../infraestructure/adapters/api/AxiosApiAdapter";
import { SignAdapter } from "../../infraestructure/adapters/signAdapter/SignAdapter";
import { ItemRepositoryImpl } from "../../infraestructure/repositories/item/itemRepositoryImp";

const getItemDetailUseCase = (param:string)=>{
    const signAdapter = new SignAdapter();
    const AxiosApiInstance = new AxiosApiAdapter(signAdapter);
    const useCaseRepo = new ItemRepositoryImpl(AxiosApiInstance);
    return useCaseRepo.getItem(param);
}

export default getItemDetailUseCase;