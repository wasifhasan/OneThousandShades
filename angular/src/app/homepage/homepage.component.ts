import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Ng2ScrollableDirective } from 'ng2-scrollable';


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
   array = [];
  sum = 100;
  
  constructor(private http: HttpClient) {
     for (let i = 0; i < this.sum; ++i) {
      this.array.push(i);
    }
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
 onScrollDown () {
    console.log('scrolled!!');

    // add another 20 items
    const start = this.sum;
    this.sum += 20;
    for (let i = start; i < this.sum; ++i) {
      this.array.push(i);
    }
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
