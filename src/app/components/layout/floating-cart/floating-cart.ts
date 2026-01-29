import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
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
}