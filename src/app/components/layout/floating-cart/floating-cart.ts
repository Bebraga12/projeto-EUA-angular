import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // 1. Importe o Router
import { CartService } from '../../../services/cart/cart';

@Component({
  selector: 'app-floating-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './floating-cart.html',
  styleUrl: './floating-cart.scss'
})
export class FloatingCartComponent {
  cartService = inject(CartService);
  private router = inject(Router); // 2. Injete o Router

  // 3. Crie a função
  finalizeOrder() {
    this.cartService.toggleCart(); // Fecha o carrinho flutuante
    this.router.navigate(['/checkout']); // Navega para a página de checkout
  }
}