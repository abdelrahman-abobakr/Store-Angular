import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidatorFn, ValidationErrors  } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  registerForm: FormGroup;

  
  constructor(private fb: FormBuilder, private router: Router){
    this.registerForm = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(2)]],
      email:['', [Validators.email, Validators.required]],
      username: ['', [Validators.required, Validators.pattern('^\\S+$')]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required, this.confirmPassValidator()]]
    }) 

  }

  get formControls(){
    return this.registerForm.controls;
  }

  confirmPassValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = this.registerForm?.get('password')?.value;
      const confirmPassword = control.value;
      
      return password === confirmPassword ? null : { passwordMismatch: true };
    };
  }

  handleRegister() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched(); // Highlight errors
      return;
    }
    
    console.log("Registration Successful", this.registerForm.value);
    this.router.navigate(['/']); // Redirect to Home
  }
}
