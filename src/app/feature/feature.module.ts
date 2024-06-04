import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';

@NgModule({
  imports: [
    CommonModule,
    PagesModule
  ],
  declarations: [],
  exports: [
    PagesModule
  ]
})
export class FeatureModule { }
