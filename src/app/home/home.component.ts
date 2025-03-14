import { Component, inject } from '@angular/core';
// import products from "../files/products.json"
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductRequestService } from '../services/product-request.service';

@Component({
  selector: 'app-home',
  imports: [ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // allProducts = products.products;
  productService = inject(ProductRequestService)
  allProducts:any ;
  ngOnInit(){
    this.productService.getProducts().subscribe((response)=>{(this.allProducts = response.products);console.log(response)});
  }

}
