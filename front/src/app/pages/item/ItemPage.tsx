import { useLoaderData, useParams } from "react-router-dom";

const ItemPage = ()=>{
    const data = useLoaderData();
    const { id, name } = useParams<{ id: string, name: string }>();
    console.log(name,id,data)
    return <> Item Page</>
}
export default ItemPage