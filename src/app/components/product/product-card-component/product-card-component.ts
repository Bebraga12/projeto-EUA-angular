import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
// Verifique se o caminho do seu service é este mesmo ou se termina em .service
import { CartService } from '../../../services/cart/cart'; // ou './cart.service'

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  description?: string;
}

@Component({
  selector: 'app-product-card-component',
  standalone: true,
  imports: [CommonModule, RouterLink], // RouterLink OBRIGATÓRIO aqui
  templateUrl: './product-card-component.html',
  styleUrl: './product-card-component.scss'
})
export class ProductCardComponent {
  @Input() product!: Product;

  cartService = inject(CartService); 

  addToCart() {
    // Ação do botão
    console.log('Adicionando ao carrinho:', this.product.name); 
    this.cartService.addToCart(this.product);
    
  }
}