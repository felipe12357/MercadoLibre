import AsideMenuComponent from "./AsideMenuComponent/AsideMenuComponent"
import './searchItems.scss';
import { ItemListResponse } from "../../../infraestructure/repositories/item/item.dto";
import ItemComponent from "./itemComponent/itemComponent";
import { RelatedSearchesComponent } from "../../components/relatedSearches/RelatedSearches";
import useCustomLoaderData from "../../customHook/useLoaderData";
const SearchItemsPage =()=>{
    
    const {categories,items}:ItemListResponse = useCustomLoaderData();
    const relatedSearch = ['iphone', 'celular', 'celular huawei','celular samsung', 'xiaomi celulares', 'celulares android','celulares a credito']
    return (<div className="main-container search-item-container ">
        <RelatedSearchesComponent title='Busquedas relacionadas:' list={relatedSearch}></RelatedSearchesComponent>
        <AsideMenuComponent categories={categories} />
        <main>
            { items.map(item =><ItemComponent key={item.id} item={item}></ItemComponent>)}
        </main>
    </div>)
}

export default SearchItemsPage