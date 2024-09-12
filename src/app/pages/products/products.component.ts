import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../../models/products.enum';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  category!: string;

  products = [
    {
      id: 1,
      name: 'WLS Van Gogh Denim Jacket',
      description: 'blah blah blah ....',
      price: '1,199',
      rating: 4,
      orders: 16,
      type: PRODUCTS.clothes
    },
    {
      id: 2,
      name: 'SPECTRUM LS TEE',
      description: 'blah blah blah ....',
      price: '1,599',
      rating: 5,
      orders: 21,
      type: PRODUCTS.clothes
    },
    {
      id: 3,
      name: 'AUTO SERVICE SHIRT by GOLF WANG',
      description: 'blah blah blah ....',
      price: '2,700',
      rating: 3,
      orders: 9,
      type: PRODUCTS.clothes
    },
    {
      id: 4,
      name: 'DONT TRIP UNSTRUCTURED HAT',
      description: 'blah blah blah ....',
      price: '799',
      rating: 4,
      orders: 17,
      type: PRODUCTS.clothes
    },
    {
      id: 5,
      name: 'COZY FIT HOODIE',
      description: 'blah blah blah ....',
      price: '1,099',
      rating: 3,
      orders: 25,
      type: PRODUCTS.clothes
    },
    {
      id: 6,
      name: 'SUMMER BREEZE SHIRT',
      description: 'blah blah blah ....',
      price: '899',
      rating: 5,
      orders: 14,
      type: PRODUCTS.clothes
    },
    {
      id: 7,
      name: 'VINTAGE CHECKERED JACKET',
      description: 'blah blah blah ....',
      price: '2,199',
      rating: 4,
      orders: 19,
      type: PRODUCTS.clothes
    },
    {
      id: 8,
      name: 'CASUAL STRIPED TEE',
      description: 'blah blah blah ....',
      price: '899',
      rating: 2,
      orders: 11,
      type: PRODUCTS.clothes
    },
    {
      id: 9,
      name: 'VINTAGE OVERSIZED JACKET',
      description: 'blah blah blah ....',
      price: '1,499',
      rating: 4,
      orders: 23,
      type: PRODUCTS.clothes
    }
  ];



  constructor(
    public route: ActivatedRoute
  ) {
    this.route.params.subscribe((p: any) => {
      if (p['cat'])
        this.category = p['cat'];
    })
  }

  numSequence(n: number) {
    return Array(n);
  }
}
