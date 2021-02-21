import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logged: BehaviorSubject<any> = new BehaviorSubject(false);

  constructor(private router: Router) { }

  login(username: string, password: string): Observable<boolean> {
    // ---------- Without RxJs -----------
    // const isValid = username === "master8@lemoncode.net" && password === "12345678";
    // if (isValid) {
    //   localStorage.setItem('username', username)
    //   this.router.navigate(['/dashboard']);
    // }
    // return isValid;

    // --------- With RxJs ----------------
    const ObsLogin$: Observable<boolean> = new Observable((observer: Observer<boolean>) => {
      const isValid = username === "master8@lemoncode.net" && password === "12345678";
      observer.next(isValid);
      observer.complete();
    });
    return ObsLogin$.pipe(delay(2000));
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
