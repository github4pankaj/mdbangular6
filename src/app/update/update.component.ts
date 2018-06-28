import { Component, OnInit } from '@angular/core';
import { HttpModule, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  data: object = {};
  id: number;
  products: any;
  productObj: object = {};

  constructor(private router: Router, private aRoute: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    this.aRoute.params.subscribe(
      parms => {
        this.id = +parms['id'];
      }
    );
    this.httpClient.get("http://localhost:9999/products").subscribe(
      (res: Response) => {
        this.products = res;
        let sample = {};
        this.products.forEach(element => {
          if (element.id === this.id) {
            this.data = element;
          }
        });
      }
    )
  }
  updateProduct = function (formData) {
    this.productObj = {
      "name": formData.name,
      "color": formData.color
    }
    this.httpClient.put("http://localhost:3000/products/"+this.id,this.productObj).subscribe(
      (res: Response) => {
        console.log(res);
        this.router.navigate(['/']);
      },
      error =>{
        console.log(error);
      }
    )
  }
}
