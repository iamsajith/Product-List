import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-product-list-header',
  templateUrl: './product-list-header.component.html',
  styleUrls: ['./product-list-header.component.css']
})
export class ProductListHeaderComponent implements OnInit {

  constructor(public _auth:AuthService,private _router:Router) { }

  ngOnInit(): void {
  }
  redirect(){
    this._router.navigate(['/add'])
  }

}
