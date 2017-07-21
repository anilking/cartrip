import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    constructor() {
        
    }

    //to show the loader
    show() {
      document.getElementById("loader-wrapper").style.display = "block";
    };

    //to hide the loader
   hide() {
      document.getElementById("loader-wrapper").style.display = "none";
    };
}