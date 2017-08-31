import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'terms-conditions',
  templateUrl: 'terms-conditions.html',
  styleUrls:['terms-conditions.scss']
})
export class TermsConditionsComponent {

    public title: any = "Terms Conditions";
    public page : string = 'terms';
    public scrollElement(id) {
      let element = document.getElementById(id);
      window.scrollTo(0, element.offsetTop);
    }

    toggleIcon(value){
      this.page = value;
    }

}