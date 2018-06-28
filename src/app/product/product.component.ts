import { Component, OnInit } from '@angular/core';
import { Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productObj: object = [];
  confirmMsg :string ="New Product has been added successfully";
  isInserted :boolean=false;
  constructor(private httpClient: HttpClient) { }
  addNewProduct = function (product) {
    console.log(product);
    this.productObj = {
      "name": product.name,
      "color": product.color
    }
    this.httpClient.post("http://localhost:9999/products", this.productObj).subscribe(
      (res: Response) => {
        console.log(res);
       this.isInserted=true;
      }
    )
    
  }
  ngOnInit() {
  }

}
