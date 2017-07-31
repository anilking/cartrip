import { Component } from '@angular/core';

declare var $;

@Component({
  selector: 'become-qooley',
  templateUrl: 'become-qooley.html',
  styleUrls: ['become-qooley.scss']
})
export class BecomeQooleyComponent {

  toggleIcon(e) {
    if (e.target.children[0].className == "more-less glyphicon glyphicon-plus") {
      e.target.children[0].className = "more-less glyphicon glyphicon-minus";
    }
    else {
      e.target.children[0].className = "more-less glyphicon glyphicon-plus";
    }
  }
}


