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
    this.authService.login(this.loginData.email, this.loginData.password).subscribe(
      success => {
        if (success) {
          this.router.navigate(['/home']);
        } else {
          console.error('Login failed');
        }
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
}
