import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router){}

  formValue = {
    email: '',
    password: ''
  } 

  handleLogin(form: NgForm) {
    if (form.invalid) {
      form.form.markAllAsTouched(); // Highlight validation errors
      return;
    }
    
    this.router.navigate(['/']);
  }
}
