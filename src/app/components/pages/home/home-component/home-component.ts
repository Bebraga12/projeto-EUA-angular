import { Component } from '@angular/core';

@Component({
  selector: 'app-home-component',
  imports: [],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 80vh;
    }
  `]
})
export class HomeComponent {

}

