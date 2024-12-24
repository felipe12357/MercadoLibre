import { Link } from "react-router-dom";
import { Item } from "../../../../domain/item/types/item.model"
import { currencyFormatter } from "../../../functions/currencyFormat";
import './item.scss';
interface ItemComponentProps {
    item:Item
};

const ItemComponent:React.FC<ItemComponentProps> =({item})=>{
    const price = currencyFormatter(item.price.currency,item.price.amount,item.price.decimals)
    return (<Link className="item" to={`/${item.title}/${item.id}`}>
        <div className="item_image"><img src={item.picture}></img></div>
        <div className="item_description">
            <h4>{item.title}</h4>
            <div className="item_description_price">{price}</div>
            <div className="item_description_envio">Envío gratis</div>
        </div>
    </Link>)
}

export default ItemComponent