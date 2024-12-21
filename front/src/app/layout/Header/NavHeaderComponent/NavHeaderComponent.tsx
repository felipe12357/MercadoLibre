import './navHeader.scss';
export const NavHeaderComponent = () => {
    const options = ['Categorías', 'Ofertas','Historia','Supermercado','Moda','Vender','Ayuda / PQR'];
    return (
        <ul>
           {options.map((option,i) => <li key={i}>{option}</li> )} 
        </ul>
    )
}