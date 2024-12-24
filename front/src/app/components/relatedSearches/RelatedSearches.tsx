import './relatedSearches.scss';
interface RelatedSearchesProps {
    title:string,
    list:string[]
};

export const RelatedSearchesComponent:React.FC<RelatedSearchesProps> =({title,list})=>{
    return (<div className='related-search'> 
        <b>{title} </b>
        {list.map((search,i) => (i === 0) ? <span key={i}> { search } </span> : 
                            <span key={i}> - { search } </span> )}
    </div>)

}