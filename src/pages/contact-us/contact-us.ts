import { AppService } from './../../providers/services/app.service';
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
  public successMsg: string;
  contactForm: FormGroup;
  regExp: any = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
  constructor(private formBuilder: FormBuilder, public toastr: Toastr, private appService: AppService) {
    this.contactForm = formBuilder.group({
      'Name': [null, Validators.required],
      'Comment': [null, Validators.required],
      'Email': [null, Validators.compose([Validators.required, Validators.pattern(this.regExp)])],
    });
  }

  onSubmit() {

    let action: string = '/contactus';
    let toastOptions: any = {
      type: 'error',
      title: 'Alert',
      position: 'toast-top-right',
      url: false
    };

    let params: any = {
      "name": this.contactForm.value['Name'],
      "email": this.contactForm.value['Email'],
      "comment": this.contactForm.value['Comment']
    };

    this.appService.makeRequestWithAction(params, action)
      .subscribe(
      data => {
        if (data.message.indexOf('Thank') > -1) {
          this.successMsg = data.message;
          this.contactForm.reset({});
        } else {
          //Display Toast
          toastOptions.body = data.error;
          this.toastr.showToastr(toastOptions);
        }
      },
      error => {
        //Display Toast
        toastOptions.body = error.message;
        this.toastr.showToastr(toastOptions);
      }
      );
  }
}


