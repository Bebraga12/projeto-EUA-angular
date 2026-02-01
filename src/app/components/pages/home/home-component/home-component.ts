import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoBarComponent } from "../info-bar-component/info-bar-component";
import { DestaquesComponent } from '../../../product/destaques-component/destaques-component'; 
import { MenuComponent } from '../../../../components/layout/menu-component/menu-component';
import { FooterComponent } from "../../../layout/footer-component/footer-component";
import { CategorySplitComponent } from "../../../layout/category-split/category-split";
import { BestSellers } from "../../../layout/best-sellers/best-sellers";

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [CommonModule, InfoBarComponent, DestaquesComponent, MenuComponent, FooterComponent, CategorySplitComponent, BestSellers], 
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss'
})
export class HomeComponent {

}