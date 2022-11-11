import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm?: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.pattern('[A-Za-z\\d]{8,}$')]],
      switch: true,
    });
  }

  register(): void {
    this.registerForm?.markAllAsTouched();

    if (this.registerForm?.valid) {
      console.log('registered', this.registerForm?.value);
    }
  }
}
