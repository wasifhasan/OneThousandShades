import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
	product = {};
  ngOnInit() {
  }
	
	saveProduct() {
    this.http.post('/api/addProduct', this.product)
      .subscribe(res => {
          this.router.navigate(['/products', res]);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
