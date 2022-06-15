import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

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

  constructor(private _auth: AuthService,private router:Router) {}
  Verify() {
    this._auth.login(this.User).subscribe((data)=>{
      localStorage.setItem('token',data.token)
      this.router.navigate(['/']);

    })
    console.log("Verified")
  }

  ngOnInit(): void {}
}
