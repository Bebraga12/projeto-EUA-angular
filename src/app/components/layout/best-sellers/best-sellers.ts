import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../../services/cart/cart'; // Verifique se o caminho está correto para seu projeto

// Interface simples caso não esteja importando de outro lugar
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

@Component({
  selector: 'app-best-sellers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './best-sellers.html',
  styleUrl: './best-sellers.scss'
})
export class BestSellers implements AfterViewInit {
  // Injeção de dependências
  private router = inject(Router);
  cartService = inject(CartService);

  @ViewChild('carousel') carousel!: ElementRef;
  @ViewChild('track') track!: ElementRef;
  
  scrollThumbWidth = 20;
  scrollThumbLeft = 0;
  
  isDragging = false;
  startX = 0;
  startScrollLeft = 0;

  // Mock de dados para Best Sellers
  products: Product[] = Array.from({ length: 8 }, (_, i) => ({
    id: i + 100, // IDs diferentes para não conflitar
    name: i % 2 === 0 ? 'Vintage Track Jacket' : 'Urban Oversized Hoodie',
    price: i % 2 === 0 ? 189.90 : 229.90,
    // Usei imagens genéricas de placeholder, troque pelas suas assets
    image: i % 2 === 0 
      ? 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1000&auto=format&fit=crop' 
      : 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop',
    category: 'Best Seller'
  }));

  ngAfterViewInit() {
    this.updateScrollIndicator();
  }

  // --- NAVEGAÇÃO E CARRINHO ---

  goToProduct(id: number) {
    if (!this.isDragging) {
      this.router.navigate(['/product', id]);
    }
  }

  addToCart(product: Product, event: Event) {
    event.stopPropagation();
    this.cartService.addToCart(product);
  }

  toggleWishlist(event: Event) {
    event.stopPropagation();
    // Lógica de wishlist aqui
  }

  // --- LÓGICA DO CARROSSEL ---

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  onScroll() {
    if (!this.isDragging) {
      this.updateScrollIndicator();
    }
  }

  updateScrollIndicator() {
    const element = this.carousel.nativeElement;
    const scrollLeft = element.scrollLeft;
    const scrollWidth = element.scrollWidth;
    const clientWidth = element.clientWidth;

    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;

    const percentage = (scrollLeft / maxScroll) * 100;
    const visibleRatio = clientWidth / scrollWidth;
    
    this.scrollThumbWidth = Math.max(visibleRatio * 100, 10); 
    const availableTrack = 100 - this.scrollThumbWidth;
    this.scrollThumbLeft = (percentage / 100) * availableTrack;
  }

  onThumbMouseDown(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
    this.startX = event.clientX;
    this.startScrollLeft = this.carousel.nativeElement.scrollLeft;
    this.carousel.nativeElement.style.scrollBehavior = 'auto'; 
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;
    event.preventDefault();

    const trackWidth = this.track.nativeElement.clientWidth;
    const carouselElement = this.carousel.nativeElement;
    const maxScroll = carouselElement.scrollWidth - carouselElement.clientWidth;
    const availableTrackPercent = 100 - this.scrollThumbWidth;
    
    const deltaX = event.clientX - this.startX;
    const deltaPercent = (deltaX / trackWidth) * 100;
    const scrollDelta = (deltaPercent / availableTrackPercent) * maxScroll;

    carouselElement.scrollLeft = this.startScrollLeft + scrollDelta;
    this.updateScrollIndicator();
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    if (this.isDragging) {
      this.isDragging = false;
      this.carousel.nativeElement.style.scrollBehavior = 'smooth';
    }
  }

  onTrackClick(event: MouseEvent) {
    if (event.target === this.track.nativeElement) {
      const trackRect = this.track.nativeElement.getBoundingClientRect();
      const clickX = event.clientX - trackRect.left;
      const trackWidth = trackRect.width;
      const clickPercent = (clickX / trackWidth);
      
      const carouselElement = this.carousel.nativeElement;
      const maxScroll = carouselElement.scrollWidth - carouselElement.clientWidth;
      
      carouselElement.scrollTo({
        left: clickPercent * maxScroll,
        behavior: 'smooth'
      });
    }
  }
}