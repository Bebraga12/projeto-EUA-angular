import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-info-bar-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './info-bar-component.html',
  styleUrl: './info-bar-component.scss'
})
export class InfoBarComponent {
  // Atualizei a imagem de "Accessories" para uma funcional
  categories = [
    {
      title: 'STREETWEAR',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop', 
      link: '/shop/streetwear'
    },
    {
      title: 'BASICS & ESSENTIALS',
      image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000&auto=format&fit=crop',
      link: '/shop/basics'
    },
    {
      title: 'ACCESSORIES',
      // Nova imagem (Mulher estilo urbano com gorro/óculos - Vibe Accessories)
      image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1000&auto=format&fit=crop', 
      link: '/shop/accessories'
    }
  ];
}