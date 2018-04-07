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
  public imagesUrl;
  title = 'Welcome To OneThousandShade';  
  array = [];
  sum = 100;
  
  constructor(private http: HttpClient) {
     for (let i = 0; i < this.sum; ++i) {
      this.array.push(i);
    }
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
    this.imagesUrl = [
    'assets/img/gallery/118_Gatehouse_Battle_Abbey.jpg',
    'assets/img/gallery/118_Gatehouse_Battle_Abbey.jpg',
    'assets/img/gallery/118_Gatehouse_Battle_Abbey.jpg',
    'assets/img/gallery/118_Gatehouse_Battle_Abbey.jpg',
    'assets/img/gallery/118_Gatehouse_Battle_Abbey.jpg',
    'assets/img/gallery/118_Gatehouse_Battle_Abbey.jpg',
    'assets/img/gallery/118_Gatehouse_Battle_Abbey.jpg',
    ];

    this.http.get('/api/productCategory').subscribe(data => {
      this.productCatgories = data;
    });
    this.http.get('/api/productCategoryMap').subscribe(data => {
      this.productMap = data;
    });
  }

}
