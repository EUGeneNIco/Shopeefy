import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = new BehaviorSubject<CartItem[]>([]);
  carItems$ = this.cartItems.asObservable();

  constructor(
    private toastrService: ToastrService
  ) { }

  addToCart(item: CartItem) {
    const currentItems = this.cartItems.getValue();
    this.cartItems.next([...currentItems, item]);

    this.toastrService.success('Item added to cart successfully.');
  }

  removeItemFromCart(productId: number, variation: string) {
    const currentItems = this.cartItems.getValue();
    const cartItems = currentItems.filter(x => x.productId !== productId || x.variation !== variation);
    this.cartItems.next(cartItems);
  }
}
