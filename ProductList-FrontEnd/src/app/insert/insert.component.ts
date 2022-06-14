import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../product-list/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css'],
})
export class InsertComponent implements OnInit {
  

  constructor(public productService:ProductService, public route:Router ) { }

  productItem:any =new ProductModel("",0,0,0,"","")
  // products:any = []
  ngOnInit(): void {
    // this.productService.getProducts().subscribe((data) => {
    //   this.products = JSON.parse(JSON.stringify(data))
    //   console.log("Products",this.products)
    //   this.productItem.productCode = this.products[0].productCode
      
    // })
   }
  NewProduct(){
    this.productService.addProducts(this.productItem);
    console.log("Called")
    alert("Success");
    console.log(this.productItem)
    this.route.navigate(['/']);
  }
}