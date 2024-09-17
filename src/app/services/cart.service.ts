import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = new BehaviorSubject<Product[]>([]);
  carItems$ = this.cartItems.asObservable();

  constructor(
    private toastrService: ToastrService
  ) { }

  addToCart(product: Product) {
    const currentItems = this.cartItems.getValue();
    this.cartItems.next([...currentItems, product]);

    this.toastrService.success('Item added to cart successfully.');
  }
}
