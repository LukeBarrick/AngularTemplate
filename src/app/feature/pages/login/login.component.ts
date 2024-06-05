import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../../../core/services/app-settings.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AppSettingService: AppSettingsService) { }
  
  ngOnInit() {
  }

}
