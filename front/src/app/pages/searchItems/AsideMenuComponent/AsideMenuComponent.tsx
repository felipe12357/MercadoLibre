import Form from 'react-bootstrap/Form';
import './asideMenu.scss';
import { faBolt, faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ItemComponentProps {
    categories:string[]
};
const AsideMenuComponent:React.FC<ItemComponentProps> =({categories})=>{

    const mockToogleOptions = [
        {title:'Te Da envios Gratis', titleBold:'Full ',body:'En Caritos desde $60000',icon:faBolt,color:"#00a650"},
        {title:'Envío gratis'},
        {titleBold:'Compra Internacional',body:'Miles de Produtos del mundo a tu casa',icon:faEarthAmericas,color:"#0d099b"}
    ] 

    const mockResults = 12.212;
    const { search:currentSearch } = useParams<{ search: string }>();
    return (<aside className='aside'>

        <div className='aside_categories'>
            {categories.map((search,i) => (i === 0) ? <span key={i}> { search } </span> : 
                                <span key={i}> {' > '} { search } </span> )}
        </div>

       <div className='aside_results'>
            <h3>{currentSearch}</h3>
            <p>{mockResults} resultados</p>
       </div>
      
       {mockToogleOptions.map((option,i)=>
            <div className="aside_send-option-container white-container" key={i}>
                <label>
                   {(option.icon) && <FontAwesomeIcon icon={option.icon as IconProp} style={{color:option.color}}></FontAwesomeIcon>} 
                   <span><span style={{color:option.color}} className='icon-label'>{option.titleBold}</span> {option.title}</span>
                  
                    {(option.body) && <p>{option.body}</p> }
                </label>
                <Form.Check type="switch"/>
            </div>
        )}
    </aside>)
}

export default AsideMenuComponent;