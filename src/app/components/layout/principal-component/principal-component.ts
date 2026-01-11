import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "../menu-component/menu-component";
import { FooterComponent } from "../footer-component/footer-component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-principal-component',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuComponent, FooterComponent],
  templateUrl: './principal-component.html',
  styleUrl: './principal-component.scss',
})
export class PrincipalComponent {

}
