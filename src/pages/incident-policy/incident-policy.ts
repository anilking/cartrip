import { Component } from '@angular/core';

@Component({
  selector: 'incident-policy',
  templateUrl: 'incident-policy.html',
  styleUrls:['incident-policy.scss']
})
export class IncidentPolicyComponent {
    public title: any = "Incident Policy";
    public page : string = 'Incident Policy';
    public scrollElement(id) {
    let element = document.getElementById(id);
    window.scrollTo(0, element.offsetTop - (-670));
  }

  toggleIcon(value){
    this.page = value;
  }
}

