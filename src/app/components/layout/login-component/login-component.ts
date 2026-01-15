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
  passwordVisible = false; // Controle do olho

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {
    this.loginForm = this.fb.group({
      // Atualizei o Regex para aceitar Maiúsculas (a-zA-Z)
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

  // Alterna entre texto e senha
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  // Avança para senha se o email for válido
  handleEmailStep() {
    const emailControl = this.loginForm.get('email');
    if (emailControl?.valid) {
      this.showPasswordStep = true;
      this.isRegistering = false;
    } else {
      emailControl?.markAsTouched(); // Isso dispara a msg de erro no HTML
    }
  }

  // Vai para o registro (se email válido)
  goToRegister() {
    const emailControl = this.loginForm.get('email');
    if (emailControl?.valid) {
      this.isRegistering = true;
      this.showPasswordStep = false;
    } else {
      emailControl?.markAsTouched(); // Mostra erro se tentar criar conta sem email
    }
  }

  editEmail() {
    this.showPasswordStep = false;
    this.isRegistering = false;
    this.passwordVisible = false; // Reseta o olho ao voltar
    this.loginForm.get('password')?.reset();
    this.cdr.markForCheck();
  }

  submitAction() {
    if (this.isRegistering) {
      if (this.loginForm.valid) { // Validação simples
          console.log('Registering user:', this.loginForm.value);
      }
    } else if (this.loginForm.get('password')?.valid) {
      console.log('Logging in:', this.loginForm.value);
    }
  }
}