import { Component } from '@angular/core';
import { AppService } from './../../providers/services/app.service';

@Component({
  selector: 'about-us',
  templateUrl: 'about-us.html'
})
export class AboutUsComponent {
  public title: any = "About Us";

  constructor(private appService: AppService) {

  }

  ngOnInit() {
    this.appService.hide();
  }
}


