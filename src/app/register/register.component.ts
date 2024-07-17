import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { APP_CONSTANTS } from '../app.constants';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  readonly APP_CONSTANTS = APP_CONSTANTS;

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    githubuser: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  handleSubmit() {
    alert(`Datos enviados:
      name: ${this.profileForm.value.name}
      email: ${this.profileForm.value.email}
      githubuser: ${this.profileForm.value.githubuser}
      `);
  }
}
