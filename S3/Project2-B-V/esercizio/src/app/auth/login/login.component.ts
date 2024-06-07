import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.loginData).subscribe(
      response => {
        console.log('User logged in', response);
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
}
