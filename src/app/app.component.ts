import { Component,ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  @ViewChild('mainScreen') elementView: ElementRef;

  scrollToDown(){
    window.scrollTo( 0, this.elementView.nativeElement.offsetHeight);
  }

}
