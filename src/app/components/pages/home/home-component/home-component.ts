import { Component } from '@angular/core';
import { BannerComponent } from '../banner-component/banner-component';
import { InfoBarComponent } from "../info-bar-component/info-bar-component";
import { ProductCardComponent } from "../../../product/product-card-component/product-card-component";

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [BannerComponent, InfoBarComponent, ProductCardComponent], 
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss'
})
export class HomeComponent {

}