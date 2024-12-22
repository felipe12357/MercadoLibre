import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout/MainLayout";
import { Suspense } from "react";
import { HomePage, ItemLoader, ItemPage, SearchItemLoader, SearchItemsPage } from "./pages";


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
                element: <Suspense>
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

