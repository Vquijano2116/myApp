import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  // Propiedades que se enlazan con el HTML (Two-way binding con ngModel)
  name: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  mensaje: string = '';

  constructor(private router: Router) {}

  register() {
    // Validación básica
    if (this.name === '' || this.lastName === '' || this.email === '' || this.password === '') {
      this.mensaje = 'Por favor completá todos los campos.';
      return;
    }

    // Como es un registro, simulamos que siempre es exitoso si completó los datos
    this.mensaje = '¡Registro exitoso! Bienvenido ' + this.name + ' ' + this.lastName + '.';
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}