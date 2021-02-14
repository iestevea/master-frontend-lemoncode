import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/model/login-form';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: LoginForm = { username: '', password: '' };

  constructor(private service: AuthService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.service.login(this.user.username, this.user.password);
  }
}
