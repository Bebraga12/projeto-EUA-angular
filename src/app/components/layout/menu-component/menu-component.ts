import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-menu-component',
  standalone: true, // <--- 2. Certifique-se que está como true (se for projeto novo)
  imports: [CommonModule], // <--- 3. Adicione o CommonModule aqui
  templateUrl: './menu-component.html',
  styleUrls: ['./menu-component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  
  // Lista de imagens para o carrossel (adicione mais aqui se tiver)
  slides = [
    { url: '/assets/banner/fundoHeader.png', alt: 'Midnight Artist Store' },
    // Exemplo de como adicionar mais fotos:
    // { url: 'assets/outra-foto.jpg', alt: 'Outra foto' } 
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
    }, 5000); // Muda a foto a cada 5 segundos
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }
}