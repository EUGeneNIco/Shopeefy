import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public router: Router) {

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
