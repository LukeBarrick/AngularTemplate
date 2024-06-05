import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    PagesModule
  ],
  declarations: [],
  exports: [
    PagesModule
  ]
})
export class FeatureModule { }
