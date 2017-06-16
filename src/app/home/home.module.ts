import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }        from '@angular/common';
// import { SharedModule }       from '../shared/shared.module';
// import {
//   RouterModule,
//   // PreloadAllModules
// } from '@angular/router';
import { ContactComponent } from '../ContactComponent/contact.component';
// import { ContactService }       from './contact.service';
// import { ContactRoutingModule } from './contact-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UpdateProfileComponent } from './updateprofile';
// import { Reader }                   from '../shared/reader';
import {ReadersService} from '../services/readers.service';
import {SubmittedComponent} from '../shared/submitted.component';
import { PassbookComponent } from '../PassbookComponent/passbook.component';
@NgModule({
	imports: [
		HomeRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		CommonModule
		// ContactRoutingModule 
	],
	declarations: [ContactComponent, HomeComponent,UpdateProfileComponent,SubmittedComponent,
	PassbookComponent],
	providers: [
		// ContactService 
		ReadersService
	]
})
export class HomeModule { }