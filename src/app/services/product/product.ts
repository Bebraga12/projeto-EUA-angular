import { Injectable, signal } from '@angular/core';
import { Product } from '../../components/product/product-card-component/product-card-component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = signal<Product[]>(Array.from({ length: 10 }, (_, i) => ({
    id: i,
    name: i % 2 === 0 ? 'Essential Tee Black' : 'Urban Graphic Shirt',
    price: i % 2 === 0 ? 129.90 : 159.90,
    image: i % 2 === 0 ? '/assets/produtos/camisa1.png' : '/assets/produtos/camisa2.png',
    category: i % 2 === 0 ? 'Basic' : 'Streetwear',
    isNew: i < 2,
    description: 'Minimalist design met with premium cotton. The perfect fit for your daily rotation. Wash cold, hang dry.'
  })));

  getById(id: number) {
    return this.products().find(p => p.id === id);
  }
}