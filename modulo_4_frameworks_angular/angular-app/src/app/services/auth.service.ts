import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(username: string, password: string): Boolean {
    const isValid = username === "master8@lemoncode.net" && password === "12345678";
    if (isValid) {
      localStorage.setItem('username', username)
      this.router.navigate(['/dashboard']);
    }
    return isValid;
  }

  logout(): void {
    localStorage.removeItem('username');
    this.router.navigate(['/home']);
  }

  isLogged(): boolean {
    return !!localStorage.getItem('username');
  }

  getUsername(): string {
    return localStorage.getItem('username') || '';
  }

  canActivate(): boolean {
    return this.isLogged();
  }
}
