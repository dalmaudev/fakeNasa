import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  imgLogo = '/assets/fake-nasa.png';
  profileForm = new FormGroup({
    githubuser: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  handleSubmit() {
    alert(`Datos enviados:
      email: ${this.profileForm.value.email}
      githubuser: ${this.profileForm.value.githubuser}
      `);
  }
}
