import { Component, inject, Input } from '@angular/core';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { Router } from '@angular/router';
// import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, TitleCasePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  // router = inject(Router)
  
  constructor(private router:Router){

  }
  @Input() product: any;

  redirectToProduct(id: number){
    this.router.navigate(['product-details',id]);
  }
}
