import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }

  getProducts(){return this.http.get('http://localhost:5000/products')}

  addProducts(item: any) {

    return this.http.post('http://localhost:5000/insert', { item }).subscribe(data => { console.log(data) });
  }
  removeProducts(){
    return this.http.delete('http://localhost:5000/products/clear').subscribe(()=>{  
      console.log("Deleted");  
  });
  }

  }
