import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'register',
    title: 'Register Page',
    component: RegisterComponent,
  },
  {
    path: 'login',
    title: 'Login Page',
    component: LoginComponent,
  },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
];
