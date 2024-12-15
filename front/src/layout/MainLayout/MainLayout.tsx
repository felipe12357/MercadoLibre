import { Outlet } from "react-router-dom";
import HeaderComponent from "../Header/Header"

const MainLayout = ()=>{
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <Outlet ></Outlet>
        </>
    )
}

export default MainLayout;