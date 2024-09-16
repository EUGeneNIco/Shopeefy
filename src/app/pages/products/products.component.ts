import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
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
  productItems!: Product[];

  products: Product[] = [
    {
      "id": 1,
      "name": "WLS Van Gogh Denim Jacket",
      "description": "A premium denim jacket inspired by the art of Van Gogh, featuring intricate embroidery and a tailored fit. Ideal for both casual and semi-formal occasions.",
      "price": "$1,199",
      "rating": 4,
      "orders": 16,
      "category": PRODUCTS.clothes,
      "store": "Artisan Apparel",
      "variations": ["S", "M", "L", "XL"]
    },
    {
      "id": 2,
      "name": "SPECTRUM LS TEE",
      "description": "A vibrant long-sleeve tee made from soft cotton, perfect for layering or wearing on its own. Comes in multiple colors to suit any style.",
      "price": "$1,599",
      "rating": 5,
      "orders": 21,
      "category": PRODUCTS.clothes,
      "store": "Urban Streetwear",
      "variations": ["S", "M", "L", "XL"]
    },
    {
      "id": 3,
      "name": "AUTO SERVICE SHIRT by GOLF WANG",
      "description": "A retro-style workwear shirt with bold prints, designed by GOLF WANG. Features durable fabric and a loose fit for a casual look.",
      "price": "$2,700",
      "rating": 3,
      "orders": 9,
      "category": PRODUCTS.clothes,
      "store": "Golf Wang Official",
      "variations": ["M", "L", "XL"]
    },
    {
      "id": 4,
      "name": "DONT TRIP UNSTRUCTURED HAT",
      "description": "A laid-back, unstructured hat with a minimal design. Adjustable for a custom fit, perfect for outdoor activities or casual wear.",
      "price": "$799",
      "rating": 4,
      "orders": 17,
      "category": PRODUCTS.clothes,
      "store": "Headgear Hub",
      "variations": ["One Size"]
    },
    {
      "id": 5,
      "name": "COZY FIT HOODIE",
      "description": "Stay warm and comfortable with this ultra-soft hoodie, featuring a relaxed fit and a kangaroo pocket. Perfect for chilly days or lounging at home.",
      "price": "$1,099",
      "rating": 3,
      "orders": 25,
      "category": PRODUCTS.clothes,
      "store": "Cozy Threads",
      "variations": ["S", "M", "L", "XL"]
    },
    {
      "id": 6,
      "name": "SUMMER BREEZE SHIRT",
      "description": "A lightweight, breathable shirt designed for warm weather. Its relaxed fit and subtle pattern make it perfect for beach days or casual outings.",
      "price": "$899",
      "rating": 5,
      "orders": 14,
      "category": PRODUCTS.clothes,
      "store": "Beachside Wear",
      "variations": ["M", "L", "XL"]
    },
    {
      "id": 11,
      "name": "Nike Air Max",
      "description": "Breathable and comfortable running shoes featuring Nike's iconic air cushioning system for optimal support during your runs.",
      "price": "$120",
      "rating": 4,
      "orders": 1520,
      "category": PRODUCTS.footwear,
      "store": "Nike Official Store",
      "variations": ["7", "8", "9", "10", "11", "12"]
    },
    {
      "id": 12,
      "name": "Adidas Ultraboost",
      "description": "High-performance running shoes with responsive cushioning, designed for long-distance runs and all-day comfort.",
      "price": "$180",
      "rating": 4,
      "orders": 1832,
      "category": PRODUCTS.footwear,
      "store": "Adidas Store",
      "variations": ["6", "7", "8", "9", "10", "11"]
    },
    {
      "id": 13,
      "name": "Puma Ignite",
      "description": "Lightweight trainers offering flexibility and support, perfect for high-intensity workouts or daily wear.",
      "price": "$100",
      "rating": 3,
      "orders": 892,
      "category": PRODUCTS.footwear,
      "store": "Puma Outlet",
      "variations": ["6", "7", "8", "9", "10"]
    },
    {
      "id": 14,
      "name": "Reebok Classic",
      "description": "A timeless sneaker design with updated comfort, suitable for casual wear and light activities.",
      "price": "$90",
      "rating": 3,
      "orders": 1105,
      "category": PRODUCTS.footwear,
      "store": "Reebok Store",
      "variations": ["7", "8", "9", "10", "11", "12"]
    },
    {
      "id": 15,
      "name": "Converse All Star",
      "description": "Iconic high-top canvas shoes, beloved for their versatile style and durable construction. A must-have for any casual wardrobe.",
      "price": "$60",
      "rating": 2,
      "orders": 3210,
      "category": PRODUCTS.footwear,
      "store": "Converse Official",
      "variations": ["6", "7", "8", "9", "10", "11"]
    },
    {
      "id": 16,
      "name": "New Balance 574",
      "description": "A reliable and comfortable sneaker with a retro design. Ideal for both casual wear and light exercise.",
      "price": "$85",
      "rating": 5,
      "orders": 1420,
      "category": PRODUCTS.footwear,
      "store": "New Balance Store",
      "variations": ["6", "7", "8", "9", "10", "11", "12"]
    },
    {
      "id": 26,
      "name": "Apple iPhone 14",
      "description": "The latest iPhone featuring the powerful A15 chip, 5G connectivity, and an enhanced camera system for stunning photos and videos.",
      "price": "$999",
      "rating": 3,
      "orders": 5500,
      "category": PRODUCTS.gadgets,
      "store": "Apple Store",
      "variations": ["Black", "White", "Red", "Blue"]
    },
    {
      "id": 27,
      "name": "Samsung Galaxy S22",
      "description": "A flagship Android smartphone with a 120Hz display, 108MP camera, and cutting-edge performance for everyday tasks and gaming.",
      "price": "$899",
      "rating": 4,
      "orders": 4700,
      "category": PRODUCTS.gadgets,
      "store": "Samsung Official",
      "variations": ["Phantom Black", "Phantom White", "Green", "Pink Gold"]
    },
    {
      "id": 28,
      "name": "Sony WH-1000XM4",
      "description": "Industry-leading noise-canceling headphones that deliver exceptional sound quality, perfect for music lovers and frequent travelers.",
      "price": "$350",
      "rating": 4,
      "orders": 2500,
      "category": PRODUCTS.gadgets,
      "store": "Sony Store",
      "variations": ["Black", "Silver"]
    },
    {
      "id": 29,
      "name": "Apple Watch Series 7",
      "description": "A smartwatch with advanced health features, including ECG, blood oxygen monitoring, and fitness tracking, designed for all-day wear.",
      "price": "$399",
      "rating": 4,
      "orders": 3200,
      "category": PRODUCTS.gadgets,
      "store": "Apple Store",
      "variations": ["Starlight", "Midnight", "Green", "Blue", "Product Red"]
    },
    {
      "id": 30,
      "name": "Amazon Echo Dot",
      "description": "A compact smart speaker with Alexa built-in, capable of voice control, music streaming, and smart home integration.",
      "price": "$49",
      "rating": 4,
      "orders": 6400,
      "category": PRODUCTS.gadgets,
      "store": "Amazon Store",
      "variations": ["Charcoal", "Glacier White", "Twilight Blue"]
    }
  ];


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
