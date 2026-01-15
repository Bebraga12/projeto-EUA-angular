import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, OnDestroy, NgZone, ChangeDetectorRef, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-component.html',
  styleUrls: ['./menu-component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  slides = [
    { 
      url: 'assets/banner/fundoHeader.png', 
      title: 'New Arrivals', 
      sub: 'Minimal streetwear without the fluff.' 
    },
    { 
      url: 'assets/banner/teste2.jpg', 
      title: 'Midnight Edition', 
      sub: 'Exclusive drops for the creative mind.' 
    },
    { 
      url: 'assets/banner/teste.jpg', 
      title: 'Winter Series', 
      sub: 'Built for the elements, designed for the streets.' 
    }
  ];

  currentSlideIndex = 0;
  intervalId: any;
  isMenuOpen = false;

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
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startSlider() {
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          this.nextSlide();
          this.cdr.markForCheck();
        });
      }, 6000);
    });
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}