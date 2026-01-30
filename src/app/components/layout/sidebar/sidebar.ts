import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class SidebarComponent {
  
  priceValue = signal(150); 
  searchQuery = signal('');

  categories = [
    { name: 'T-Shirts', checked: true },
    { name: 'Hoodies & Sweats', checked: false },
    { name: 'Accessories', checked: false },
    { name: 'Pants', checked: false },
    { name: 'Jackets', checked: false }
  ];

  sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  selectedSize = signal('M'); 

  handleSearch() {
    if (this.searchQuery().trim() !== '') {
      alert('Product not found');
      this.searchQuery.set('');
    }
  }

  onInputChange() {
    let value = this.priceValue();
    if (value > 500) this.priceValue.set(500);
    if (value < 0) this.priceValue.set(0);
  }

  selectSize(size: string) {
    this.selectedSize.set(size);
  }
}