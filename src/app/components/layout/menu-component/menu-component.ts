import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-menu-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.scss',
})
export class MenuComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }
  
  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }
}