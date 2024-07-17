import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'register',
    title: 'Register Page',
    component: FormComponent,
  },
  {
    path: 'login',
    title: 'Login Page',
    component: LoginComponent,
  },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
];
