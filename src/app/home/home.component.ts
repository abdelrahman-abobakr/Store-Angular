import { Component } from '@angular/core';
import products from "../files/products.json"
import { ProductCardComponent } from '../product-card/product-card.component';
@Component({
  selector: 'app-home',
  imports: [ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  allProducts = products.products;
}
