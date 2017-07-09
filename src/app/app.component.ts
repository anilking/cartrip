import { Component, ElementRef, ViewChild } from '@angular/core';

declare var $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  @ViewChild('mainScreen') elementView: ElementRef;

  ngOnInit() {
    $('#firstGrid').backstretch(["assets/img/portfolio/1.jpg", "assets/img/portfolio/2.jpg"], {
      duration: 2000, fade: 100
    }); $('#secondGrid').backstretch(["assets/img/portfolio/3.jpg", "assets/img/portfolio/4.jpg"],
      { duration: 1000, fade: 100 }); $('#thirdGrid').backstretch(["assets/img/portfolio/5.jpg", "assets/img/portfolio/6.jpg"],
        { duration: 4000, fade: 100 }); $('#fourthGrid').backstretch(["assets/img/portfolio/7.jpg", "assets/img/portfolio/8.jpg"],
          { duration: 3000, fade: 100 }); $('#fifthGrid').backstretch(["assets/img/portfolio/9.jpg", "assets/img/portfolio/10.jpg"],
            { duration: 1000, fade: 100 }); $('#sixthGrid').backstretch(["assets/img/portfolio/11.jpg", "assets/img/portfolio/12.jpg"],
              { duration: 5000, fade: 100 });
  };



  scrollToDown() {
    window.scrollTo(0, this.elementView.nativeElement.offsetHeight);
  }

}
