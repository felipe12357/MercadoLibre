import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import './SearchBar.scss';

const SearchBarComponent = ()=>{

    const [currentSearch,setSearch] = useState('');
    const navigate = useNavigate();

    const handleChange =(event:ChangeEvent<HTMLInputElement>) =>{
        const searchText = event.target.value.toLowerCase();
        setSearch(searchText);
      
    }

    const handleKeyDown =(event:React.KeyboardEvent<HTMLInputElement>) =>{
        if(event.key === 'Enter')
            redirect()
    }

    const redirect =()=>{
        navigate (`/${currentSearch}`)
    }
    

    return (
        <div className="input-container">
            <input type="text" placeholder='Buscar productos, marcas y más..' 
                onKeyDown={(e)=>(handleKeyDown(e))}
                onChange={(e)=>(handleChange(e))}></input>
            <button onClick={()=>redirect()}>
                <FontAwesomeIcon icon={faMagnifyingGlass as IconProp} ></FontAwesomeIcon>
            </button>
        </div>

    )
}
export default SearchBarComponent;