import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessário para ngClass e ngStyle

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  link: string;
}

@Component({
  selector: 'app-banner-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-component.html',
  styleUrl: './banner-component.scss'
})
export class BannerComponent implements OnInit, OnDestroy {
  
  currentSlide = 0;
  autoPlayInterval: any;

  // Dados Mockados (Substitua pelas suas imagens depois)
  slides: Slide[] = [
    {
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop',
      title: 'New Collection',
      subtitle: 'Summer / 2026',
      link: '/new-arrivals'
    },
    {
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop',
      title: 'Minimalist Essentials',
      subtitle: 'Timeless pieces for your wardrobe',
      link: '/essentials'
    },
    {
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop',
      title: 'Winter Editorial',
      subtitle: 'Discover the warmth of style',
      link: '/editorial'
    }
  ];

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    // Importante: Limpa o timer quando o componente é destruído para evitar vazamento de memória
    this.stopAutoPlay();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.resetTimer();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.resetTimer();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.resetTimer();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Muda a cada 5 segundos
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  resetTimer() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}