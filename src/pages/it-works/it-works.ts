import { Component } from '@angular/core';

@Component({
  selector: 'it-works',
  templateUrl: 'it-works.html',
  styleUrls:['it-works.scss']
})
export class ItWorksComponent {
    public title: any = "How It Works";

     public scrollElement(id) {
      let element = document.getElementById(id);
      window.scrollTo(0, element.offsetTop - (-400));
    }
}


