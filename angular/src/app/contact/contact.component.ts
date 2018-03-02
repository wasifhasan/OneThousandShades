import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	
	contacts: any;
  constructor(private http: HttpClient) { }
 	ngOnInit() {
 	alert("hi");
  this.http.get('/api/contacts').subscribe(data => {
    this.contacts = data;
  });
}

}
