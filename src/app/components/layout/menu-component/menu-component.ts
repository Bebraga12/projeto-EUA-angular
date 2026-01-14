import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, OnDestroy, NgZone, ChangeDetectorRef, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-menu-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-component.html',
  styleUrls: ['./menu-component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  slides = [
    { url: 'assets/banner/teste2.jpg', title: 'New Arrivals', sub: 'Minimal streetwear without the fluff.' },
    { url: 'assets/banner/fundoHeader.png', title: 'Midnight Edition', sub: 'Exclusive drop available now.' },
    { url: 'assets/banner/teste.jpg', title: 'Winter Collection', sub: 'Designed for the elements.' }
  ];

  currentSlideIndex = 0;
  intervalId: any;

  constructor(
    private ngZone: NgZone, 
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startSlider();
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  startSlider() {
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
          this.cdr.markForCheck();
        });
      }, 8000);
    });
  }
}