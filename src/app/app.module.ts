import { CategoriesComponent } from './../pages/categories/categories';
import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeToComponent } from './../pages/welcome-to/welcome-to';
import { TermsConditionsComponent } from './../pages/terms-conditions/terms-conditions';
import { SignUpComponent } from './../pages/sign-up/sign-up';
import { SafetyComponent } from './../pages/safety/safety';
import { PrivacyPolicyComponent } from './../pages/privacy-policy/privacy-policy';
import { PaymentPolicyComponent } from './../pages/payment-policy/payment-policy';
import { ItWorksComponent } from './../pages/it-works/it-works';
import { IncidentPolicyComponent } from './../pages/incident-policy/incident-policy';
import { ContactUsComponent } from './../pages/contact-us/contact-us';
import { AboutUsComponent } from './../pages/about-us/about-us';
import { MainComponent } from './../pages/main/main';
import { BecomeQooleyComponent } from './../pages/become-qooley/become-qooley';

//serivces
import { AppService } from './../providers/services/app.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    IncidentPolicyComponent,
    ItWorksComponent,
    PaymentPolicyComponent,
    PrivacyPolicyComponent,
    SafetyComponent,
    SignUpComponent,
    TermsConditionsComponent,
    WelcomeToComponent,
    MainComponent,
    BecomeQooleyComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
  /* hiding page loading wrapper */ 
  public loaderEl = document.getElementById("loader-wrapper");
  
  constructor(){
    if(this.loaderEl){
        this.loaderEl.style.setProperty("display", "none");
    }
  }
  
}
