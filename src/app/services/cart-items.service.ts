import { Injectable } from '@angular/core';
import { BehaviorSubject , Observable } from 'rxjs';
export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  stock: number;
  image: string;
}
@Injectable({
  providedIn: 'root'
})
export class CartItemsService {

  constructor() { }
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);  // Reactive stream for cart updates

  getCart(){
    return this.cartSubject.asObservable();  // Exposes the cart as an Observable
  }

  addToCart(product: any): void {
    const foundItem = this.cartItems.find(item => item.id === product.id);

    if (foundItem) {
      if (foundItem.quantity < foundItem.stock) {
        foundItem.quantity++;
      }

    } else {
      this.cartItems.push({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
        stock: product.stock,
        image: product.images[0]
      });
    }

    this.updateCart();
  }

  updateQuantity(productId: number, change: number): void {
    this.cartItems = this.cartItems.map(item => 
      item.id === productId 
        ? { ...item, quantity: Math.max(1, Math.min(item.quantity + change, item.stock)) }
        : item
    );

    this.updateCart();
  }

  removeItem(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.updateCart();
  }

  updateCart(): void {
    this.cartSubject.next([...this.cartItems]);  
  }

}
