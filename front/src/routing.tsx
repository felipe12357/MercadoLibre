import { createBrowserRouter } from "react-router-dom";
//import { Suspense } from "react";
import MainLayout from "./layout/MainLayout/MainLayout";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>
    },
]);

