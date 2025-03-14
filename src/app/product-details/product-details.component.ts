import { CounterServiceService } from './../services/counter-service.service';
import { Component, inject, Input } from '@angular/core';
// import productsData from "../files/products.json";
import { CurrencyPipe, TitleCasePipe, DatePipe } from '@angular/common';
import { ProductRequestService } from '../services/product-request.service';
import { CartItemsService } from '../services/cart-items.service';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe, TitleCasePipe, DatePipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  cartCounter: number = 0;
  counterService = inject(CounterServiceService);
  productService = inject(ProductRequestService);
  cartService = inject(CartItemsService);

  @Input() id: string ='';
  product: any=null;

  ngOnInit(){
    this.productService.getProducts().subscribe((response)=> this.product = response.products.find((product: { id: number }) => product.id === Number(this.id)))
    // this.product = productsData.products.find(product => product.id === Number(this.id))||{};
    this.counterService.getCounter().subscribe((response)=>(this.cartCounter = response));

  }
  addProduct(){
    this.counterService.setCounter(this.cartCounter +1);
    this.cartService.addToCart(this.product);
  }
}
