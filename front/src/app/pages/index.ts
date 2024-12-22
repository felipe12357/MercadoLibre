import { lazy } from "react";

export const HomePage = lazy(()=>import("./home/HomePage")); 
export const SearchItemsPage = lazy(()=>import("./searchItems/SearchItemsPage")); 
export const ItemPage = lazy(()=>import('./item/ItemPage'))

export {SearchItemLoader} from './searchItems/SearchItemLoader'
export {ItemLoader} from './item/ItemLoader'