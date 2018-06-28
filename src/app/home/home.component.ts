import { Component, OnInit } from '@angular/core';
import { HttpModule,Response,Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/operator/filter';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }
  ngOnInit() {
    console.log(this.fetchData());
  }
  products =[];
  id:number;
  private header = new Headers({'Content-Type':'application/json'})
  fetchData = function(){
    this.httpClient.get("http://localhost:9999/products").subscribe(
      (res:Response) =>{
        this.products=res;
        console.log(res);
      }
    ) 
  }
  deleteProd = function(id){
    if(confirm("Are you sure ?")){
      const url = "http://localhost:9999/products/"+id;
      this.httpClient.delete(url).subscribe(
        (val) =>{
          this.fetchData();
          console.log("data deleted :",val);
        },
        response =>{
          console.log("delete call error:",response);
        },
        () =>{
          console.log("OTHER ERROR");
        }
      );
    }
  }
  
 

}
