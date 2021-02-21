import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isLogged: boolean = false;
  username: string = "";

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private service: AuthService) {
    this.isLogged = service.isLogged();
    this.username = service.getUsername();
  }

  ngDoCheck(): void {
    this.isLogged = this.service.isLogged();
    this.username = this.service.getUsername();
  }

  logout() {
    this.service.logout();
    this.isLogged = false;
  }
}
