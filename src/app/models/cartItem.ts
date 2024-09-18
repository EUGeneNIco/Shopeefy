import { PRODUCTS } from "./products.enum";

export interface CartItem {
    productId: number,
    quantity: number,
    variation: string,

    name?: string,
    description?: string,
    price?: number,
    rating?: number,
    orders?: number,
    category?: PRODUCTS,
    store?: string,
    totalPrice?: number
}