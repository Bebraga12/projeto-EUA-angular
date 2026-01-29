import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FloatingCartComponent } from '../floating-cart/floating-cart';

@Component({
  selector: 'app-principal-component',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FloatingCartComponent],
  templateUrl: './principal-component.html',
  styleUrl: './principal-component.scss',
})
export class PrincipalComponent {

}
