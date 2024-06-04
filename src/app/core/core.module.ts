import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThrowIfAlreadyLoaded } from './module-import-guard';
import { DefaultService } from './services/default.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    DefaultService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    ThrowIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
