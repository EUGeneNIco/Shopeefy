import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { PRODUCTS } from '../../models/products.enum';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { products } from '../../components/data/products';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  item!: Product;
  gadgetType = PRODUCTS.gadgets;
  products: Product[] = products;

  constructor(
    public route: ActivatedRoute,
    private cartService: CartService
  ) {
    this.route.params.subscribe((p: any) => {
      if (p['productId']) {
        const productId = +p['productId'];

        const item = this.products.find(x => x.id === productId);
        if (item)
          this.item = item;
      }
    });
  }

  addToCart() {
    this.cartService.addToCart(this.item);
  }

  numSequence(n: number) {
    return Array(n);
  }
}
