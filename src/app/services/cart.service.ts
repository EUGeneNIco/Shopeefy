import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from '../models/cartItem';
import { UiService } from './ui.service';
import { products } from '../components/data/products';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = new BehaviorSubject<CartItem[]>([]);
  carItems$ = this.cartItems.asObservable();

  constructor(
    private uiService: UiService,
    private notifService: NotificationService,
  ) { }

  addToCart(item: CartItem) {
    this.uiService.block();

    setTimeout(() => {
      const currentItems = this.cartItems.getValue();

      let origPrice = 0
      const productItem = products.find(x => x.id === item.productId);
      if (productItem) origPrice = productItem.price;

      let existingItemPrice: number | undefined = 0;
      const existingItem = currentItems.find(x => x.productId === item.productId && x.variation === item.variation);

      if (!existingItem) {
        this.cartItems.next([...currentItems, item]);
      }
      else {
        existingItemPrice = this.prepareExistingItems(existingItemPrice, origPrice, existingItem, item, currentItems);
      }

      this.uiService.unBlock();
      this.notifService.notifySuccess('Item added to cart successfully.');
    }, 1000);
  }

  private prepareExistingItems(existingItemPrice: number | undefined, origPrice: number, existingItem: CartItem, item: CartItem, currentItems: CartItem[]) {
    existingItemPrice = origPrice * existingItem.quantity;

    existingItem.quantity += item.quantity;
    existingItem.price = existingItemPrice + origPrice;

    const diffProductItems = currentItems.filter(x => x.productId !== existingItem.productId);
    const sameProductButDiffVariations = currentItems.filter(x => x.productId === existingItem.productId && x.variation !== item.variation);

    this.cartItems.next([
      ...diffProductItems,
      ...sameProductButDiffVariations,
      existingItem
    ]);
    return existingItemPrice;
  }

  removeItemFromCart(productId: number, variation: string) {
    const currentItems = this.cartItems.getValue();
    const cartItems = currentItems.filter(x => x.productId !== productId || x.variation !== variation);
    this.cartItems.next(cartItems);

    this.notifService.notifySuccess('Item removed from cart.');
  }

  checkout() {
    this.uiService.block();

    // fake delay
    setTimeout(() => {
      this.uiService.unBlock();
      this.notifService.notifySuccess('Checkout successful!');
      this.cartItems.next([]);
    }, 1000);
  }
}
