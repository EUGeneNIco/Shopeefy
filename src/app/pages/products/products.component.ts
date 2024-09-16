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
      id: 1,
      name: "WLS Van Gogh Denim Jacket",
      description: "blah blah blah ....",
      price: "$1,199",
      rating: 4,
      orders: 16,
      category: PRODUCTS.clothes,
    },
    {
      id: 2,
      name: "SPECTRUM LS TEE",
      description: "blah blah blah ....",
      price: "$1,599",
      rating: 5,
      orders: 21,
      category: PRODUCTS.clothes,
    },
    {
      id: 3,
      name: "AUTO SERVICE SHIRT by GOLF WANG",
      description: "blah blah blah ....",
      price: "$2,700",
      rating: 3,
      orders: 9,
      category: PRODUCTS.clothes,
    },
    {
      id: 4,
      name: "DONT TRIP UNSTRUCTURED HAT",
      description: "blah blah blah ....",
      price: "$799",
      rating: 4,
      orders: 17,
      category: PRODUCTS.clothes,
    },
    {
      id: 5,
      name: "COZY FIT HOODIE",
      description: "blah blah blah ....",
      price: "$1,099",
      rating: 3,
      orders: 25,
      category: PRODUCTS.clothes,
    },
    {
      id: 6,
      name: "SUMMER BREEZE SHIRT",
      description: "blah blah blah ....",
      price: "$899",
      rating: 5,
      orders: 14,
      category: PRODUCTS.clothes,
    },
    {
      id: 7,
      name: "VINTAGE CHECKERED JACKET",
      description: "blah blah blah ....",
      price: "$2,199",
      rating: 4,
      orders: 19,
      category: PRODUCTS.clothes,
    },
    {
      id: 8,
      name: "CASUAL STRIPED TEE",
      description: "blah blah blah ....",
      price: "$899",
      rating: 2,
      orders: 11,
      category: PRODUCTS.clothes,
    },
    {
      id: 9,
      name: "VINTAGE OVERSIZED JACKET",
      description: "blah blah blah ....",
      price: "$1,499",
      rating: 4,
      orders: 23,
      category: PRODUCTS.clothes,
    },
    {
      id: 10,
      name: "VELLA COTTON TSHIRT",
      description: "blah blah blah ....",
      price: "$2,500",
      rating: 5,
      orders: 99,
      category: PRODUCTS.clothes,
    },
    {
      id: 11,
      name: "Nike Air Max",
      description:
        "Breathable, comfortable running shoes with excellent cushioning.",
      price: "$120",
      rating: 4,
      orders: 1520,
      category: PRODUCTS.footwear,
    },
    {
      id: 12,
      name: "Adidas Ultraboost",
      description:
        "High-performance shoes designed for long runs and daily comfort.",
      price: "$180",
      rating: 4,
      orders: 1832,
      category: PRODUCTS.footwear,
    },
    {
      id: 13,
      name: "Puma Ignite",
      description: "Lightweight, supportive trainers with enhanced flexibility.",
      price: "$100",
      rating: 3,
      orders: 892,
      category: PRODUCTS.footwear,
    },
    {
      id: 14,
      name: "Reebok Classic",
      description: "Classic design with modern updates for casual comfort.",
      price: "$90",
      rating: 3,
      orders: 1105,
      category: PRODUCTS.footwear,
    },
    {
      id: 15,
      name: "Converse All Star",
      description: "Iconic canvas shoes with high-top style.",
      price: "$60",
      rating: 2,
      orders: 3210,
      category: PRODUCTS.footwear,
    },
    {
      id: 16,
      name: "New Balance 574",
      description: "Classic design with reliable comfort and durability.",
      price: "$85",
      rating: 5,
      orders: 1420,
      category: PRODUCTS.footwear,
    },
    {
      id: 17,
      name: "Asics Gel-Kayano",
      description: "Premium running shoes for stability and support.",
      price: "$160",
      rating: 5,
      orders: 976,
      category: PRODUCTS.footwear,
    },
    {
      id: 18,
      name: "Vans Old Skool",
      description: "Skate shoes with a low-top profile and classic stripe.",
      price: "$70",
      rating: 4,
      orders: 2145,
      category: PRODUCTS.footwear,
    },
    {
      id: 19,
      name: "Skechers Go Walk",
      description: "Comfortable slip-on shoes with a lightweight feel.",
      price: "$55",
      rating: 5,
      orders: 1890,
      category: PRODUCTS.footwear,
    },
    {
      id: 20,
      name: "Timberland 6-Inch Boot",
      description: "Durable waterproof boots perfect for outdoor use.",
      price: "$200",
      rating: 5,
      orders: 610,
      category: PRODUCTS.footwear,
    },
    {
      id: 21,
      name: "Clarks Desert Boot",
      description: "Stylish suede ankle boots with a timeless design.",
      price: "$130",
      rating: 3,
      orders: 802,
      category: PRODUCTS.footwear,
    },
    {
      id: 22,
      name: "Birkenstock Arizona",
      description: "Comfortable leather sandals with a contoured footbed.",
      price: "$100",
      rating: 4,
      orders: 1456,
      category: PRODUCTS.footwear,
    },
    {
      id: 23,
      name: "Crocs Classic Clog",
      description: "Lightweight clogs with a slip-resistant sole.",
      price: "$45",
      rating: 4,
      orders: 3940,
      category: PRODUCTS.footwear,
    },
    {
      id: 24,
      name: "Dr. Martens 1460",
      description: "Classic leather boots with air-cushioned soles.",
      price: "$150",
      rating: 4,
      orders: 1070,
      category: PRODUCTS.footwear,
    },
    {
      id: 25,
      name: "Hoka One One Clifton",
      description: "Lightweight running shoes with maximal cushioning.",
      price: "$140",
      rating: 4,
      orders: 965,
      category: PRODUCTS.footwear,
    },
    {
      id: 26,
      name: "Apple iPhone 14",
      description: "Latest iPhone model with A15 chip and 5G connectivity.",
      price: "$999",
      rating: 3,
      orders: 5500,
      category: PRODUCTS.gadgets,
    },
    {
      id: 27,
      name: "Samsung Galaxy S22",
      description: "Flagship Android phone with 120Hz display and 108MP camera.",
      price: "$899",
      rating: 4,
      orders: 4700,
      category: PRODUCTS.gadgets,
    },
    {
      id: 28,
      name: "Sony WH-1000XM4",
      description:
        "Noise-canceling over-ear headphones with exceptional sound quality.",
      price: "$350",
      rating: 4,
      orders: 2500,
      category: PRODUCTS.gadgets,
    },
    {
      id: 29,
      name: "Apple Watch Series 7",
      description:
        "Smartwatch with fitness tracking and advanced health features.",
      price: "$399",
      rating: 4,
      orders: 3200,
      category: PRODUCTS.gadgets,
    },
    {
      id: 30,
      name: "Amazon Echo Dot",
      description: "Compact smart speaker with Alexa voice control.",
      price: "$49",
      rating: 4,
      orders: 6400,
      category: PRODUCTS.gadgets,
    },
    {
      id: 31,
      name: "Google Pixel 7",
      description: "Smartphone with pure Android experience and advanced camera.",
      price: "$799",
      rating: 3,
      orders: 4100,
      category: PRODUCTS.gadgets,
    },
    {
      id: 32,
      name: "DJI Mini 3 Pro",
      description:
        "Compact and lightweight drone with 4K camera and advanced features.",
      price: "$749",
      rating: 4,
      orders: 1100,
      category: PRODUCTS.gadgets,
    },
    {
      id: 33,
      name: "Apple AirPods Pro",
      description: "Wireless earbuds with active noise cancellation.",
      price: "$249",
      rating: 4,
      orders: 4600,
      category: PRODUCTS.gadgets,
    },
    {
      id: 34,
      name: "Fitbit Charge 5",
      description: "Advanced fitness tracker with health monitoring and GPS.",
      price: "$180",
      rating: 4,
      orders: 3500,
      category: PRODUCTS.gadgets,
    },
    {
      id: 35,
      name: "GoPro HERO10",
      description: "Action camera with 5.3K video and HyperSmooth stabilization.",
      price: "$500",
      rating: 4,
      orders: 2900,
      category: PRODUCTS.gadgets,
    },
    {
      id: 36,
      name: "Oculus Quest 2",
      description: "VR headset with wireless gameplay and 128GB storage.",
      price: "$299",
      rating: 4,
      orders: 5300,
      category: PRODUCTS.gadgets,
    },
    {
      id: 37,
      name: "JBL Charge 5",
      description:
        "Portable Bluetooth speaker with powerful sound and 20-hour battery life.",
      price: "$179",
      rating: 4,
      orders: 2700,
      category: PRODUCTS.gadgets,
    },
    {
      id: 38,
      name: "Logitech MX Master 3",
      description: "Wireless mouse with advanced features for productivity.",
      price: "$99",
      rating: 4,
      orders: 1700,
      category: PRODUCTS.gadgets,
    },
    {
      id: 39,
      name: "Kindle Paperwhite",
      description:
        "E-reader with a high-resolution display and adjustable light.",
      price: "$129",
      rating: 4,
      orders: 3400,
      category: PRODUCTS.gadgets,
    },
    {
      id: 40,
      name: "Bose SoundLink Revolve+",
      description: "Portable speaker with 360-degree sound and water resistance.",
      price: "$299",
      rating: 3,
      orders: 2200,
      category: PRODUCTS.gadgets,
    },
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

  numSequence(n: number) {
    return Array(n);
  }
}
