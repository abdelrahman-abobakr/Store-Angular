import { Component, Input } from '@angular/core';
import productsData from "../files/products.json";
import { CurrencyPipe, TitleCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe, TitleCasePipe, DatePipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input() id: string ='';
  product: any;
  ngOnInit(){
    this.product = productsData.products.find(product => product.id === Number(this.id))||{};

  }
}
