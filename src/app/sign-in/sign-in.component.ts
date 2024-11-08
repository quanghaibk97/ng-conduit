import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  loginForm = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required, Validators.minLength(5)
      ]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8)
      ]
    })
  })

  submit(): void{
    if(this.loginForm.invalid){
      Object.entries(this.loginForm.controls).forEach(([key, control]) => {
        if(control.errors){
          console.log('error', key, control.errors);
        }
      })
    }
  }
}
