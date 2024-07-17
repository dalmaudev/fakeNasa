import { Component } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { APP_CONSTANTS } from '../app.constants';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  readonly APP_CONSTANTS = APP_CONSTANTS;

  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
}
