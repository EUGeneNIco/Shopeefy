import { PRODUCTS } from "./products.enum";

export interface Product {
    id: number,
    name: string,
    description: string,
    price: number,
    rating: number,
    orders: number,
    category: PRODUCTS,
    store: string,
    variations: string[]
}