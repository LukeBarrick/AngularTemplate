import { APP_INITIALIZER, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThrowIfAlreadyLoaded } from './module-import-guard';
import { AuthService } from './services/auth.service';
import { AuthguardService } from './guards/authguard.service';
import { AppSettingsService } from './services/app-settings.service';

export function initializeApp(settingsService: AppSettingsService) {
  return () => settingsService.loadSettings();
} 

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [AppSettingsService], multi: true},
    AppSettingsService,
    AuthService,
    AuthguardService
  ],
  exports: [
   
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    ThrowIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
