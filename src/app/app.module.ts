import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from 'src/app/profile.service';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';


// @NgModule({
//  declarations: [
//    AppComponent,
//    ProfileComponent,
//  ],
 
//  imports: [
//    BrowserModule,
//    HttpClientModule,
//    FormsModule,
//    ReactiveFormsModule
//  ],
//  providers: [ProfileService],
//  bootstrap: [AppComponent]
// })
export class AppModule { }
