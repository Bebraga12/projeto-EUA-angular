import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-bar-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-bar-component.html',
  styleUrl: './info-bar-component.scss'
})
export class InfoBarComponent {
  infoItems = [
    {
      title: 'Free Shipping',
      subtitle: 'On orders over $150',
      // Truck Icon
      iconPath: 'M1 3h15v13H1z M16 8h4l3 3v5h-7V8z M5.5 16a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z M18.5 16a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z'
    },
    {
      title: 'Secure Payment',
      subtitle: '100% secure checkout',
      // Shield Icon
      iconPath: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z'
    },
    {
      title: 'Easy Returns',
      subtitle: '30-day return policy',
      // Cycle Icon
      iconPath: 'M23 4v6h-6 M1 20v-6h6 M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15'
    },
    {
      title: '24/7 Support',
      subtitle: 'Dedicated customer care',
      // Headset Icon
      iconPath: 'M3 18v-6a9 9 0 0 1 18 0v6 M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z'
    }
  ];
}