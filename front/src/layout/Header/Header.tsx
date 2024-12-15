import './header.scss';

const HeaderComponent = ()=>{
    return (<header className='header'>
        <a className='logo'></a>
        <input type="text" placeholder='Buscar productos, marcas y más..'></input>
    </header>)
}
export default HeaderComponent;