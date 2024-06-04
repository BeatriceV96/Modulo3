import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  onSubmit(form: any) {
    if (form.valid) {
      console.log(form.value);
    } else {
      console.error('Form non valido');
    }
  }
}
