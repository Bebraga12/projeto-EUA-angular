import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-menu-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-component.html',
  styleUrls: ['./menu-component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {


  slides = [
    { url: 'assets/banner/fundoHeader.png', alt: 'Slide 1' },
    { url: 'assets/banner/fundoHeader.png', alt: 'Slide 2' }, 
    { url: 'assets/banner/fundoHeader.png', alt: 'Slide 3' }  
  ];

  currentSlideIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startSlider();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startSlider() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); 
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }
}