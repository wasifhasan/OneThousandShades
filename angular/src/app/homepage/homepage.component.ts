import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
	productCatgories:any;
	productMap:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  this.http.get('/api/productCategory').subscribe(data=>{
	  this.productCatgories=data;
	  });
	 this.http.get('/api/productCategoryMap').subscribe(data=>{
	  this.productMap=data;
	  });
  }

}
