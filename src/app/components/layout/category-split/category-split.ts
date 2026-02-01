import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-split',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-split.html',
  styleUrl: './category-split.scss'
})
export class CategorySplitComponent {
  
  categories = [
    {
      title: 'FEMININO',
      label: 'Ver Coleção',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop', 
      link: '/shop/feminino'
    },
    {
      title: 'MASCULINO',
      label: 'Ver Coleção',
      image: 'https://images.unsplash.com/photo-1491336477066-31156b5e4f35?q=80&w=1000&auto=format&fit=crop', 
      link: '/shop/masculino'
    }
  ];

  constructor(private router: Router) {}

  navigateTo(link: string) {
    this.router.navigate([link]);
  }
}