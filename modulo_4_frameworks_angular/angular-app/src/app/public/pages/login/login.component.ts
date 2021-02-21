import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/model/login-form';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: LoginForm = { username: '', password: '' };
  isLoading: boolean = false;

  constructor(private service: AuthService, private router: Router) {
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    // this.service.unsubscribe();
  }

  login() {
    this.isLoading = true;
    this.service.login(this.user.username, this.user.password).subscribe(
      isValidLogin => {
        if (isValidLogin) {
          localStorage.setItem('username', this.user.username)
          this.router.navigate(['/dashboard']);
        }
      },
      error => console.log(error as string),
      () => this.isLoading = false
    );
  }
}
