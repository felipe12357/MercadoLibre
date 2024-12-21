import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout/MainLayout";
import { Suspense } from "react";
import { HomePage, ItemPage, SearchItemsPage } from "./pages";
import { SearchItemLoader } from "./pages/searchItems/SearchItemLoader";
import { ItemLoader } from "./pages/item/ItemLoader";




export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                path: "/:name/:id", 
                element: <Suspense >
                            <ItemPage/>
                        </Suspense>,
                loader:async({params})=> await ItemLoader(params as {id:string})
            },
            {
                path: "/:search", 
                element: <Suspense >
                            <SearchItemsPage/>
                        </Suspense>,
                loader:async({params})=> await SearchItemLoader(params as {search:string})
            },

            {
                path: "/", 
                element: <HomePage/>
            },
        ]
    },
]);

