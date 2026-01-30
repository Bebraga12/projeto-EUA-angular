import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent, Product } from '../product-card-component/product-card-component'; 
import { SidebarComponent } from '../../layout/sidebar/sidebar';

@Component({
  selector: 'app-destaques-component',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, SidebarComponent], 
  templateUrl: './destaques-component.html',
  styleUrl: './destaques-component.scss'
})
export class DestaquesComponent {
  
  products: Product[] = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    name: i % 2 === 0 ? 'Essential Tee Black' : 'Urban Graphic Shirt',
    price: i % 2 === 0 ? 129.90 : 159.90,
    image: i % 2 === 0 ? 'assets/produtos/camisa1.png' : 'assets/produtos/camisa2.png',
    category: i % 2 === 0 ? 'Basic' : 'Streetwear',
    isNew: i < 2 
  }));
}