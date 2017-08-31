import { Component } from '@angular/core';

@Component({
  selector: 'privacy-policy',
  templateUrl: 'privacy-policy.html',
  styleUrls:['privacy-policy.scss']
})
export class PrivacyPolicyComponent {
    public title: any = "Privacy Policy";
    public page : string = 'Privacy Policy';
    public scrollElement(id) {
    let element = document.getElementById(id);
    window.scrollTo(0, element.offsetTop);
  }

  toggleIcon(value){
    this.page = value;
  }
}


