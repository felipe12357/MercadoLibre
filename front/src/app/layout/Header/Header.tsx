
import './header.scss';
import SearchBarComponent from './SearchBarComponent/SearchBarComponent';
import { NavHeaderComponent } from './NavHeaderComponent/NavHeaderComponent';

const HeaderComponent = ()=>{

    return (<><header className='header'>
        <a className='logo'></a>
        <div className='search-container'>
            <SearchBarComponent></SearchBarComponent>
            <NavHeaderComponent></NavHeaderComponent>
        </div>
      
    </header><div>
       
    </div></>)
}
export default HeaderComponent;