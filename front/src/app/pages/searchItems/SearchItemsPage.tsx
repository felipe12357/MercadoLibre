import AsideMenuComponent from "./AsideMenuComponent/AsideMenuComponent"
import { useLoaderData } from "react-router-dom";
import './searchItems.scss';
import { ItemListResponse } from "../../../infraestructure/repositories/item/item.dto";
import ItemComponent from "./itemComponent/itemComponent";
const SearchItemsPage =()=>{
    
    const {categories,items}:ItemListResponse = useLoaderData();
    const relatedSearch = ['iphone', 'celular', 'celular huawei','celular samsung', 'xiaomi celulares', 'celulares android','celulares a credito']
    return (<div className="main-container">
        <div> 
            <b>Busquedas relacionadas: </b>
            {relatedSearch.map((search,i) => (i === 0) ? <span key={i}> { search } </span> : 
                                <span key={i}> - { search } </span> )}
        </div>
       <AsideMenuComponent categories={categories} />
        <main>
            { items.map(item =><ItemComponent key={item.id} item={item}></ItemComponent>)}
        </main>
    </div>)
}

export default SearchItemsPage