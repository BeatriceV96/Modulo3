import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { iUser } from '../../models/i-user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerData: Partial<iUser> & { confirmPassword: string } = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    id: 0,
    confirmPassword: ''
  };

  constructor(private authService: AuthService) {}

  register() {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    this.authService.register(this.registerData as iUser).subscribe(
      response => {
        console.log('User registered', response);
      },
      error => {
        console.error('Registration failed', error);
      }
    );
  }
}
