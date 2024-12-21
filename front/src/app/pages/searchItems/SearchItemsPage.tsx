import AsideMenuComponent from "./AsideMenuComponent/AsideMenuComponent"
import { useLoaderData } from "react-router-dom";
import './searchItems.scss';
import { ItemListResponse } from "../../../infraestructure/repositories/item/item.dto";
import ItemComponent from "./itemComponent/itemComponent";
const SearchItemsPage =()=>{
    const {categories,items}:ItemListResponse = useLoaderData();
    return (<div className="main-container">
        <div> 
            <b>Busquedas relacionadas: </b>
            {categories.map((search,i) => (i === 0) ? <span key={i}> { search } </span> : 
                                <span key={i}> - { search } </span> )}
        </div>
        <span><AsideMenuComponent /></span>
        <main>
            { items.map(item =><ItemComponent key={item.id} item={item}></ItemComponent>)}
        </main>
    </div>)
}

export default SearchItemsPage