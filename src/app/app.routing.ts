/**
* To define routing (url) for each module.
* Routing uses hash location strategy, so you can see # in url
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const appRoutes: Routes = [
	{
		path: '', component: WelcomeToComponent
	},
	{
		path: 'about', component: AboutUsComponent
	},
	{
		path: 'safety-satisfaction',component:SafetyComponent
	},
	{
		path: 'terms-conditions',component:TermsConditionsComponent
	},
	{
		path: 'payment-policy', component: PaymentPolicyComponent
	},
	{
		path: 'privacy-policy',component:PaymentPolicyComponent
	},
	{
		path: 'incident-policy',component:IncidentPolicyComponent
	},
	{
		path: 'how-it-works', component: ItWorksComponent
	},
	{
		path: 'contact',component:ContactUsComponent
	},
	{
		path: 'sign-up',component:SignUpComponent
	},
	{
		path: '', redirectTo: '', pathMatch: 'full'
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes, { useHash: true })
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }