import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from 'express';
import { ProductModel } from '../product-list/product.model';
import { ProductService } from '../product.service';


import { FormsModule }  from '@angular/forms';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css'],
})
export class InsertComponent implements OnInit {
  

  constructor() { }

  // productItem:any =new ProductModel("",0,0,0,"","")

  ngOnInit(): void { }
  // NewProduct(){
  //   this.productService.addProducts(this.productItem);
  //   console.log("Called")
  //   alert("Success");
  //   (<any>this.router).navigate(['/']);
  // }
}