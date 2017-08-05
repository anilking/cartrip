import { Component } from '@angular/core';

@Component({
  selector: 'payment-policy',
  templateUrl: 'payment-policy.html',
  styleUrls: ['payment-policy.scss']
})
export class PaymentPolicyComponent {
    public title: any = "Payment Policy";
    public page : string = 'terms';
    public scrollElement(id) {
    let element = document.getElementById(id);
    window.scrollTo(0, element.offsetTop - (-670));
  }

  toggleIcon(value){
    this.page = value;
  }
}



