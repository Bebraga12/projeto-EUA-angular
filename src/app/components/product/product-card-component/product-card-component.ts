import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart/cart';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
}

@Component({
  selector: 'app-product-card-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card-component.html',
  styleUrl: './product-card-component.scss'
})
export class ProductCardComponent {
  @Input() product!: Product;

  cartService = inject(CartService); 

  addToCart() {
    console.log('Adicionando ao carrinho:', this.product.name); 
    
    this.cartService.addToCart(this.product);
  }
}