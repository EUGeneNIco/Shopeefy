import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, MatIconModule, MatBadgeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  cartItemsCount = 0;

  constructor(
    public router: Router,
    public cartService: CartService
  ) {
    this.cartService.carItems$.subscribe({
      next: (value: Product[]) => {
        this.cartItemsCount = value.length;
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
