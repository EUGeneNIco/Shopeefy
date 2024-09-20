import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cartItem';
import { CommonModule } from '@angular/common';
import { products } from '../../components/data/products';
import { MatIconModule } from '@angular/material/icon';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartItems: WritableSignal<CartItem[]> = signal([]);
  cartItemCount: Signal<number> = computed(() => this.cartItems().length);
  totalCartPrice: Signal<number> = computed(() => {
    return this.cartItems().reduce((acc, current) => acc +
      (current.price !== undefined
        ? (current.price * current.quantity)
        : 0),
      0
    );
  });

  constructor(
    public cartService: CartService,
    public notifService: NotificationService,
  ) {
    this.cartService.carItems$.subscribe({
      next: (items: CartItem[]) => {
        const cartItems = items.map(item => {
          const product = products.find(x => x.id === item.productId);

          const newItem = {
            ...item,
            name: product?.name,
            category: product?.category,
            price: product?.price,
            totalPrice: product && product !== undefined
              ? product?.price * item.quantity
              : 0
          }

          return newItem;
        });

        this.cartItems.set(cartItems);
      },
      error: (e) => {
        console.log(e);
        this.notifService.notifyError(e.message);
      }
    })
  }

  removeItem(productId: number, variation: string) {
    this.cartService.removeItemFromCart(productId, variation);
  }

  checkOut() {
    this.cartService.checkout();
  }
}
