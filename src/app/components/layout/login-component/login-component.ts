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

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {
    this.loginForm = this.fb.group({
      // Regex para validação rigorosa de e-mail
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  proceedToPassword() {
    const emailControl = this.loginForm.get('email');
    if (emailControl?.valid) {
      this.showPasswordStep = true;
    } else {
      emailControl?.markAsTouched();
    }
  }

  editEmail() {
    this.showPasswordStep = false;
    this.loginForm.get('password')?.reset();
    this.cdr.markForCheck();
  }

  submitLogin() {
    if (this.loginForm.valid) {
      console.log('Login Success:', this.loginForm.value);
    }
  }
}