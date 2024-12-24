import { useLoaderData } from "react-router-dom";
import { RelatedSearchesComponent } from "../../components/relatedSearches/RelatedSearches";
import './item.scss';
import { ItemDetail } from "../../../domain/item/types/item.model";
import { currencyFormatter } from "../../functions/currencyFormat";
const ItemPage = ()=>{
    const item:ItemDetail = useLoaderData();

    const price = currencyFormatter(item.price.currency,item.price.amount,item.price.decimals);

    const priceInterest = (item.price.amount *.3) + item.price.amount
    const priceInterestCurrency = currencyFormatter(item.price.currency,priceInterest,item.price.decimals);
 
    const relatedSearch = ['samsung galaxy', 's23samsung galaxy s23 hasta 256 gb 5g','samsung s21 128 gb','samsung a50 128 gb'];
    return <div className="main-container"> 
        <RelatedSearchesComponent title='También puede intersarte:' list={relatedSearch}></RelatedSearchesComponent>
        <main className="item-container white-container">
            <div role="button">
                { Array.from([1,2,3]).map((i)=>
                    <img className="item-container_image" key={i} src={item.picture}></img>
                )}
            </div>
            <img className="item-container_main-image" src={item.picture}></img>           
            <div className="item-container_content">
                <h4>{item.title}</h4>
                <p className="item-container_content_price">{price}</p>
            </div>
            <div className="item-container_buy">
                <div className="item-container_buy_cuotas">
                    <h4>Cuotas sin Interés</h4>
                    <div>{priceInterestCurrency}</div>
                </div>
                <div className="item-container_buy_price">
                    <h4>Precio más conveniente</h4>
                    <div>{price}</div>
                    <button className="btn-primary">Comprar Ahora</button>
                    <button className="btn-secondary">Agregar al Carrito</button>
                </div>
            </div>
            <div className="item-container_description">
                <hr></hr>
                <h3>Descripción</h3>
                <p>
                    {item.description}
                </p>
            </div>
        </main>

    </div>
}
export default ItemPage