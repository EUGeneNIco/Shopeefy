import { PRODUCTS } from "./products.enum";

export interface Product {
    id: number,
    name: string,
    description: string,
    price: string,
    rating: number,
    orders: number,
    category: PRODUCTS,
}