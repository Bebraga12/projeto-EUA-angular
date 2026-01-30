import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../../services/cart/cart';
import { NavbarComponent } from '../../layout/navbar/navbar';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss'
})
export class CheckoutComponent {
  cartService = inject(CartService);
  
  cartItems = this.cartService.items;
  
  subtotal = computed(() => {
    return this.cartItems().reduce((acc, item) => acc + item.price, 0);
  });

  shipping = 15.00;
  
  total = computed(() => {
    return this.subtotal() + this.shipping;
  });

  processPayment() {
    alert('Processing payment...');
  }
}