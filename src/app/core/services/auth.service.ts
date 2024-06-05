import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticatedUser: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  public login(): void {
    // TODO Login functionality here.
  }
}
