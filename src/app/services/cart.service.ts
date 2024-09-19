import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from '../models/cartItem';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = new BehaviorSubject<CartItem[]>([]);
  carItems$ = this.cartItems.asObservable();

  constructor(
    private toastrService: ToastrService,
    private uiService: UiService,
  ) { }

  addToCart(item: CartItem) {
    this.uiService.block();

    const currentItems = this.cartItems.getValue();
    this.cartItems.next([...currentItems, item]);

    setTimeout(() => {
      this.uiService.unBlock();
      this.toastrService.success('Item added to cart successfully.');
    }, 1000);
  }

  removeItemFromCart(productId: number, variation: string) {
    const currentItems = this.cartItems.getValue();
    const cartItems = currentItems.filter(x => x.productId !== productId || x.variation !== variation);
    this.cartItems.next(cartItems);

    this.toastrService.success('Item removed from cart.');
  }

  checkout() {
    this.uiService.block();

    // fake delay
    setTimeout(() => {
      this.uiService.unBlock();
      this.toastrService.success('Checkout successful!');
      this.cartItems.next([]);
    }, 1000);
  }
}
