import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer-component',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.scss'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  emailNewsletter: string = '';

  constructor(private router: Router) {}

  subscribe() {
    if (this.emailNewsletter && this.emailNewsletter.trim() !== '') {
      this.router.navigate(['/login'], { 
        queryParams: { email: this.emailNewsletter } 
      });
    }
  }
}