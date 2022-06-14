import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  User = {
    username: '',
    password: '',
  };

  constructor(private _auth: AuthService) {}
  Verify() {
    this._auth.login(this.User);
    console.log("Verified")
  }

  ngOnInit(): void {}
}
