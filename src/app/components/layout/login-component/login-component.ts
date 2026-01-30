import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  showPasswordStep = false;
  isRegistering = false;
  passwordVisible = false; 

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      firstName: [''],
      lastName: [''],
      day: [''],
      month: [''],
      year: [''],
      agreeTerms: [false]
    });
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  handleEmailStep() {
    const emailControl = this.loginForm.get('email');
    if (emailControl?.valid) {
      this.showPasswordStep = true;
      this.isRegistering = false;
    } else {
      emailControl?.markAsTouched(); 
    }
  }

  goToRegister() {
    const emailControl = this.loginForm.get('email');
    if (emailControl?.valid) {
      this.isRegistering = true;
      this.showPasswordStep = false;
    } else {
      emailControl?.markAsTouched(); 
    }
  }

  editEmail() {
    this.showPasswordStep = false;
    this.isRegistering = false;
    this.passwordVisible = false; 
    this.loginForm.get('password')?.reset();
    this.cdr.markForCheck();
  }

  submitAction() {
    if (this.isRegistering) {
      if (this.loginForm.valid) { 
          console.log('Registering user:', this.loginForm.value);
      }
    } else if (this.loginForm.get('password')?.valid) {
      console.log('Logging in:', this.loginForm.value);
    }
  }
}