import { Component, inject } from '@angular/core';
import { CartItemsService, CartItem } from '../services/cart-items.service';
import { Observable } from 'rxjs';
import {  CurrencyPipe, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports: [ CurrencyPipe, AsyncPipe]
})
export class CartComponent {
  cartService = inject(CartItemsService);
  cartItems$: Observable<CartItem[]> = this.cartService.getCart(); // ✅ Added $ to indicate Observable

  increaseQuantity(productId: number) {
    this.cartService.updateQuantity(productId, 1);
  }

  decreaseQuantity(productId: number) {
    this.cartService.updateQuantity(productId, -1);
    console.log(this.cartItems$)
  }

  removeItem(productId: number) {
    this.cartService.removeItem(productId);
  }

  getTotal(cartItems: CartItem[] | null = []): number { 
    return cartItems?.reduce((sum, item) => sum + item.price * item.quantity, 0) ?? 0;
  }
}
