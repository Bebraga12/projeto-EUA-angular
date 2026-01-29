import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../../components/product/product-card-component/product-card-component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = signal<Product[]>([]);
  isVisible = signal(false);
  total = computed(() => this.items().reduce((acc, item) => acc + item.price, 0));
  addToCart(product: Product) {
    this.items.update(current => [...current, product]);
    this.isVisible.set(true);
  }
  removeFromCart(index: number) {
    this.items.update(current => current.filter((_, i) => i !== index));
    if (this.items().length === 0) {
      this.isVisible.set(false);
    }
  }

  toggleCart() {
    this.isVisible.update(v => !v);
  }
}