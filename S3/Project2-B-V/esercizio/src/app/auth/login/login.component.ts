import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService) {}

  signIn() {
    this.authService.login(this.login).subscribe(
      response => {
        console.log('User logged in', response);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
}
