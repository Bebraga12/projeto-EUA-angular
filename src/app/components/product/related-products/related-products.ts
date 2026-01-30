import { Component, inject, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card-component/product-card-component';
import { ProductService } from '../../../services/product/product'; 

@Component({
  selector: 'app-related-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './related-products.html',
  styleUrl: './related-products.scss'
})
export class RelatedProductsComponent implements OnInit {
  productService = inject(ProductService);
  
  infiniteProducts: any[] = [];

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  ngOnInit() {
    const original = this.productService.products();

    if (original && original.length > 0) {
      this.infiniteProducts = Array(10).fill(original).flat();
    }
  }

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -245, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 245, behavior: 'smooth' });
  }
}