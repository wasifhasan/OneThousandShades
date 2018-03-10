import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
  
export class HomepageComponent implements OnInit {
  mouseover:any;
  productCatgories: any;
  productMap: any;
  images:any;
  title = 'Welcome To OneThousandShade';  
  
  
  constructor(private http: HttpClient) {
    this.images = [
      {'url': 'assets/img/gallery/gallery-img-1-4col.jpg'},
      {'url': 'assets/img/gallery/gallery-img-1-4col.jpg'},
      {'url': 'assets/img/gallery/gallery-img-1-4col.jpg'},
      {'url': 'assets/img/gallery/gallery-img-1-4col.jpg'},
      {'url': 'assets/img/gallery/gallery-img-1-4col.jpg'},
      {'url': 'assets/img/gallery/gallery-img-1-4col.jpg'},
      {'url': 'assets/img/gallery/gallery-img-1-4col.jpg'},
      {'url': 'assets/img/gallery/gallery-img-1-4col.jpg'},
      {'url': 'assets/img/gallery/gallery-img-1-4col.jpg'},
      {'url': 'assets/img/gallery/gallery-img-1-4col.jpg'},
      {'url': 'assets/img/gallery/gallery-img-1-4col.jpg'},
      {'url': 'assets/img/gallery/gallery-img-1-4col.jpg'}
    ];
  }

  ngOnInit() {
    this.http.get('/api/productCategory').subscribe(data => {
      this.productCatgories = data;
    });
    this.http.get('/api/productCategoryMap').subscribe(data => {
      this.productMap = data;
    });
  }

}
