import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; 
import { Product } from '../../product/product-card-component/product-card-component';
import { ProductService } from '../../../services/product/product'; 
import { CartService } from '../../../services/cart/cart'; 
import { SidebarComponent } from '../../layout/sidebar/sidebar'; 
import { NavbarComponent } from '../../layout/navbar/navbar';
import { RelatedProductsComponent } from '../../product/related-products/related-products';
import { FooterComponent } from "../../layout/footer-component/footer-component";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, SidebarComponent, NavbarComponent, RelatedProductsComponent, FooterComponent],
  templateUrl: './product-detail.html', 
  styleUrl: './product-detail.scss'  
})
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  cartService = inject(CartService);

  product?: Product;
  isFilterOpen = false;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.product = this.productService.getById(id);
    });
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);
    }
  }

  toggleFilter() {
    this.isFilterOpen = !this.isFilterOpen;
  }
}