import { Component } from '@angular/core';
declare var $;

@Component({
  selector: 'main',
  templateUrl: 'main.html',
  styleUrls: ['main.scss']
})
export class MainComponent {

  constructor() {

  }

  ngOnInit() {
    $('#mainGrid').backstretch([
      /* 'assets/img/portfolio/1.jpg', */
      'assets/img/portfolio/2.jpg',
      'assets/img/portfolio/3.jpg',
      /* 'assets/img/portfolio/4.jpg' */],
      { duration: 5000, fade: 100 });

    $('#firstGrid').backstretch([
      'assets/img/AdventureTheme/1.jpg',
      'assets/img/AdventureTheme/2.jpg',
      'assets/img/AdventureTheme/3.jpg',
      'assets/img/AdventureTheme/4.jpg',
      'assets/img/AdventureTheme/5.jpg',
      'assets/img/AdventureTheme/6.jpg',
      'assets/img/AdventureTheme/7.jpg',
      'assets/img/AdventureTheme/8.jpg',
      'assets/img/AdventureTheme/9.jpg',
      'assets/img/AdventureTheme/10.jpg'],
      { duration: 3000, fade: 100 });

    $('#secondGrid').backstretch([
      'assets/img/EntertainmentTheme/1.jpg',
      'assets/img/EntertainmentTheme/2.jpg',
      'assets/img/EntertainmentTheme/3.jpg',
      'assets/img/EntertainmentTheme/4.jpg',
      'assets/img/EntertainmentTheme/5.jpg',
      'assets/img/EntertainmentTheme/6.jpg',
      'assets/img/EntertainmentTheme/7.jpg',
      'assets/img/EntertainmentTheme/8.jpg'],
      { duration: 4000, fade: 100 });

    $('#thirdGrid').backstretch([
      'assets/img/FoodieTheme/1.jpg',
      'assets/img/FoodieTheme/2.jpg',
      'assets/img/FoodieTheme/3.jpg',
      'assets/img/FoodieTheme/4.jpg',
      'assets/img/FoodieTheme/5.jpg',
      'assets/img/FoodieTheme/6.jpg',
      'assets/img/FoodieTheme/7.jpg',
      'assets/img/FoodieTheme/8.jpg',
      'assets/img/FoodieTheme/9.jpg',
      'assets/img/FoodieTheme/10.jpg',
      'assets/img/FoodieTheme/11.jpg'],
      { duration: 5000, fade: 100 });

    $('#fourthGrid').backstretch([
      'assets/img/Hobbies/1.jpg',
      'assets/img/Hobbies/2.jpg',
      'assets/img/Hobbies/3.jpg',
      'assets/img/Hobbies/4.jpg',
      'assets/img/Hobbies/5.jpg',
      'assets/img/Hobbies/6.jpg',
      'assets/img/Hobbies/7.jpg'],
      { duration: 3000, fade: 100 });

    $('#fifthGrid').backstretch([
      'assets/img/RideAlongTheme/1.jpg',
      'assets/img/RideAlongTheme/2.jpg',
      'assets/img/RideAlongTheme/3.jpg',
      'assets/img/RideAlongTheme/4.jpg',
      'assets/img/RideAlongTheme/5.jpg'],
      { duration: 2000, fade: 100 });

    $('#sixthGrid').backstretch([
      'assets/img/SightseeingTheme/1.jpg',
      'assets/img/SightseeingTheme/2.jpg',
      'assets/img/SightseeingTheme/3.jpg',
      'assets/img/SightseeingTheme/4.jpg',
      'assets/img/SightseeingTheme/5.jpg',
      'assets/img/SightseeingTheme/6.jpg'],
      { duration: 5000, fade: 100 });
  };

  pauseImage(id) {
    $('#' + id).backstretch('pause');
  }
  resumeImage(id) {
    $('#' + id).backstretch('resume');
  }

}


