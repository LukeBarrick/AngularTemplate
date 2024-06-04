import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SplashComponent } from './splash/splash.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginComponent,
    HomeComponent,
    SplashComponent
  ],
  exports: [
    LoginComponent,
    HomeComponent,
    SplashComponent
  ]
})
export class PagesModule { }
