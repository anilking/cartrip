import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Toastr } from './../../providers/services/toastr.service';

@Component({
  selector: 'contact-us',
  templateUrl: 'contact-us.html',
  styleUrls: ['contact-us.scss']
})
export class ContactUsComponent {
  public title: any = 'Contact Us';
  contactForm: FormGroup;
  regExp: any = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
  constructor(private formBuilder: FormBuilder, public toastr: Toastr) {
    this.contactForm = formBuilder.group({
      'Name': [null, Validators.required],
      'Comment': [null, Validators.required],
      'Email': [null, Validators.compose([Validators.required, Validators.pattern(this.regExp)])],
    });
  }

  onSubmit(){
    let toastOptions: any = {
      type: 'success',
      body: "Thanks for sending your message! We'll get back to you shortly",
      title: 'Alert',
      position: 'toast-top-right',
      url: false
    };
    this.toastr.showToastr(toastOptions);
  }
}


