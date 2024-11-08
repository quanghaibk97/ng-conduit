import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  signUpForm = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required, Validators.minLength(5)
      ]
    }),
    emial: new FormControl('', {
      validators: [Validators.required]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8)
      ]
    })
  })

  submit(): void{
    if(this.signUpForm.invalid){
      Object.entries(this.signUpForm.controls).forEach(([key, control]) => {
        if(control.errors){
          console.log('error', key, control.errors);
        }
      })
    }
  }
}
