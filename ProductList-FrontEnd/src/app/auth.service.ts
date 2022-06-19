import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(authData:any){
    return this.http.post<any>("http://localhost:5000/login",{authData})
    }

    loggedIn(){
      return !!localStorage.getItem('token')
      
    }
    getToken(){
      
      return localStorage.getItem('token')
    }
  }
