import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';
import { CartItem } from '../../models/cartItem';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, MatIconModule, MatBadgeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  cartItemsCount = signal(0);

  constructor(
    public router: Router,
    public cartService: CartService
  ) {
    this.cartService.carItems$.subscribe({
      next: (value: CartItem[]) => {
        this.cartItemsCount.set(value.length);
      },
      error: (e) => {
        console.log(e);
      }
    })
  }

  productCategories = [
    { name: 'Clothes', route: 'clothes' },
    { name: 'Footwear', route: 'footwear' },
    { name: 'Gadgets', route: 'gadgets' },
  ]

  goToProductPage(route: string) {
    this.router.navigate(['products', route]);
  }
}
