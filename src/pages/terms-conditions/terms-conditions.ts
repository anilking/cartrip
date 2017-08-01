import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'terms-conditions',
  templateUrl: 'terms-conditions.html',
  styleUrls:['terms-conditions.scss']
})
export class TermsConditionsComponent {

    public title: any = "Terms Conditions";

    public scrollElement(id) {
      let element = document.getElementById(id);
      window.scrollTo(0, element.offsetTop - 70);
    }

    toggleIcon(e) {
      if (e.target.children[0].className == "more-less glyphicon glyphicon-plus") {
        e.target.children[0].className = "more-less glyphicon glyphicon-minus";
      }
      else {
        e.target.children[0].className = "more-less glyphicon glyphicon-plus";
      }
    }
}


