import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public productService:ProductService, public route:Router) { }

  title:string = "Product Dashboard";

  ngOnInit(): void {
  }
 removeAll(){
  this.productService.removeProducts()
  console.log('Deleted')
  this.route.navigate(['/']);
 }
  

}
