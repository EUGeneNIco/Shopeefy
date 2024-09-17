import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { PRODUCTS } from '../../models/products.enum';
import { products } from '../../components/data/products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  category!: string;
  productItems!: Product[];
  products: Product[] = products;

  constructor(
    public route: ActivatedRoute,
    public router: Router
  ) {
    this.route.params.subscribe((p: any) => {
      if (p['cat'])
        this.category = p['cat'];
      else {
        this.router.navigate(['products', PRODUCTS.clothes]);
      }

      this.productItems = this.products.filter(p => p.category == this.category);
    });

  }

  viewProductDetails(productId: number) {
    this.router.navigate(['products/detail', productId]);
  }

  numSequence(n: number) {
    return Array(n);
  }
}
