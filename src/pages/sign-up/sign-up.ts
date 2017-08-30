import { AppService } from './../../providers/services/app.service';
import { Toastr } from './../../providers/services/toastr.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from "@angular/forms";

declare var $;

interface JQuery {
  datepicker(options: any): JQuery;
  modal(options: any): JQuery;
}

@Component({
  selector: 'sign-up',
  templateUrl: 'sign-up.html',
  styleUrls: ['sign-up.scss']
})
export class SignUpComponent {
  public title: any = "Sign up";
  public successMsg: any = "";
  public categories: Array<any> = [];
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public toastr: Toastr, private appService: AppService) {
    this.signUpForm = formBuilder.group({
      'FirstName': [null, Validators.required],
      'LastName': [null, Validators.required],
      'Email': [null, Validators.compose([Validators.required, Validators.pattern(/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i)])],
      'Town': [null, Validators.required],
      'category_ids': this.formBuilder.array([])
    });
    this.getCategories();
  }

onChange(id:string, isChecked: boolean) {
      const categoryids = <FormArray>this.signUpForm.controls["category_ids"];
      if(isChecked) {
        categoryids.push(new FormControl(id));
      } else {
        let index = categoryids.controls.findIndex(x => x.value == id)
        categoryids.removeAt(index);
      }
  }

  onSubmit() {
    let geolocationPosition: any = {};
     let toastOptions: any = {
      type: 'error',
      title: 'Alert',
      position: 'toast-top-right',
      url: false
    };
    if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                geolocationPosition = position;
            },
            error => {
                switch (error.code) {
                    case 1:
                        toastOptions.body = "Permission Denied";
                        this.toastr.showToastr(toastOptions);
                        break;
                    case 2:
                        toastOptions.body = "Position Unavailable";
                        this.toastr.showToastr(toastOptions);
                        break;
                    case 3:
                        toastOptions.body = "Timeout";
                        this.toastr.showToastr(toastOptions);
                        break;
                }
            }
        );
    };
    let coords = geolocationPosition.coords || {};
    let action: string = '/web_user';
    let params: any = {
      "fname": this.signUpForm.value['FirstName'],
      "lname": this.signUpForm.value['LastName'],
      "email": this.signUpForm.value['Email'],
      "location": this.signUpForm.value['Town'],
      "lat": coords.latitude,
      "long": coords.longitude,
      "category_ids": this.signUpForm.value['category_ids']
    };
    this.appService.show();
    this.appService.makeRequestWithAction(params, action)
      .subscribe(
      data => {
        this.appService.hide();
        if (data.message.indexOf('Thank') > -1) {
          this.successMsg = data.message;
          document.getElementById("onModelPopup").click();
          this.signUpForm.reset({});
        } else {
          toastOptions.body = data.error;
          this.toastr.showToastr(toastOptions);
        }
      },
      error => {
        //Display Toast
        this.appService.hide();
        toastOptions.body = error.message;
        this.toastr.showToastr(toastOptions);
      }
      );
  }

  getCategories() {
    let action: string = '/service_categories';
    let toastOptions: any = {
      type: 'error',
      title: 'Alert',
      position: 'toast-top-right',
      url: false
    };

    this.appService.show();
    this.appService.makeGetWithAction(action)
      .subscribe(
      data => {
        this.appService.hide();
        if (data && data.length > 0) {
          this.categories = data || [];
        } else {
          //Display Toast
          toastOptions.body = data.error;
          this.toastr.showToastr(toastOptions);
        }
      },
      error => {
        //Display Toast
        this.appService.hide();
        toastOptions.body = error.message;
        this.toastr.showToastr(toastOptions);
      }
      );
  }
}


