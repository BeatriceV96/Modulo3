import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: this.fb.control(null, [Validators.required]), // Corretto 'firsName' in 'firstName'
      lastName: this.fb.control(null, [Validators.required]),
      username: this.fb.control(null, [Validators.required]),
      password: this.fb.control(null, [Validators.required]),
      confirmPassword: this.fb.control(null),
      gender: this.fb.control(null, [Validators.required]),
      profileImage: this.fb.control(null, [Validators.required]),
      bio: this.fb.control('')
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }
}
