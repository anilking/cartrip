import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: 'sign-up',
  templateUrl: 'sign-up.html',
  styleUrls: ['sign-up.scss']
})
export class SignUpComponent {
    public title: any = "Sign up";
    signUpForm: FormGroup;

    constructor(private formBuilder: FormBuilder){
        this.signUpForm = formBuilder.group({
          'FirstName': [null, Validators.required],
          'LastName': [null, Validators.required],
          'Email': [null, Validators.compose([Validators.required, Validators.pattern(/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i)])],
          'Town': [null, Validators.required]
		  });
    }
}


