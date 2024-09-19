import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { PRODUCTS } from '../../models/products.enum';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { products } from '../../components/data/products';
import { CartItem } from '../../models/cartItem';
import { UiService } from '../../services/ui.service';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  item!: Product;
  selectedItemVariation!: string;
  gadgetType = PRODUCTS.gadgets;
  products: Product[] = products;

  get hasSelectedVariation() {
    return this.selectedItemVariation !== undefined &&
      this.selectedItemVariation &&
      this.selectedItemVariation !== ''
  }

  constructor(
    public route: ActivatedRoute,
    private cartService: CartService,
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

  onSelectVariation(itemVariation: string) {
    this.selectedItemVariation = itemVariation;
  }

  addToCart() {
    const cartItem: CartItem = {
      productId: this.item.id,
      quantity: 1, // for now,
      variation: this.selectedItemVariation
    };

    this.cartService.addToCart(cartItem);
    this.selectedItemVariation = '';
  }

  numSequence(n: number) {
    return Array(n);
  }
}
