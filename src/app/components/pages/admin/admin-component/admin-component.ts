import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-component.html',
  styleUrl: './admin-component.scss',
})
export class AdminComponent {
  productForm: FormGroup;
  colors = ['BLACK', 'WHITE', 'GRAY', 'NAVY', 'RED'];

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required]],
      price: [null, [Validators.required, Validators.min(0.01)]],
      color: ['BLACK', [Validators.required]],
      brand: this.fb.group({
        id: [1, [Validators.required]] 
      })
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const payload = this.productForm.value;
      console.log('Payload para API:', JSON.stringify(payload, null, 2));
      
    }
  }
}