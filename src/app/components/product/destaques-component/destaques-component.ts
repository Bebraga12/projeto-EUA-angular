import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// --- AQUI ESTÁ A CORREÇÃO DO ERRO ---
// Estamos importando o componente E o model 'Product' do outro arquivo
// Nota: Se der erro de caminho, verifique se a pasta se chama 'product-card-component' mesmo
import { ProductCardComponent, Product } from '../product-card-component/product-card-component'; 

@Component({
  selector: 'app-destaques-component',
  standalone: true,
  imports: [CommonModule, ProductCardComponent], 
  templateUrl: './destaques-component.html',
  styleUrl: './destaques-component.scss'
})
export class DestaquesComponent {
  
  // O erro sumirá porque agora ele sabe o que é 'Product'
  products: Product[] = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    name: i % 2 === 0 ? 'Essential Tee Black' : 'Urban Graphic Shirt',
    price: i % 2 === 0 ? 129.90 : 159.90,
    image: i % 2 === 0 ? 'assets/produtos/camisa1.png' : 'assets/produtos/camisa2.png',
    category: i % 2 === 0 ? 'Basic' : 'Streetwear',
    isNew: i < 2 
  }));
}