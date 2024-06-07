import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { iUser } from '../../models/i-user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent {
  registerData: Partial<iUser> & { confirmPassword: string } = {
    firstName: '',
    email: '',
    password: '',
    id: 0,
    confirmPassword: ''
  };

  constructor(private authService: AuthService) {}


}
