import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(authData:any){
    return this.http.post("http://localhost:5000/login",authData).subscribe((data)=>{  
      console.log(data,'loaded');  
  });
    }
  }
