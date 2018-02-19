import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductCreateComponent } from './product-create/product-create.component';

const appRoutes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
    data: { title: 'Product List' }
  },
  {
    path: 'product-create',
    component: ProductCreateComponent,
    data: { title: 'Create Product' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact List' }
  },
  {
    path: 'contact-detail/:id',
    component: ContactDetailComponent,
    data: { title: 'Contact Details' }
  },
  {
    path: 'contact-create',
    component: ContactCreateComponent,
    data: { title: 'Create Contact' }
  },
  {
    path: 'contact-edit/:id',
    component: ContactEditComponent,
    data: { title: 'Edit Contact' }
  },
  { path: '',
    redirectTo: '/product',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
	ContactDetailComponent,
	ContactCreateComponent,
	ContactEditComponent,
	ProductComponent,
	ProductCreateComponent
  ],
  imports: [
    BrowserModule,
  	FormsModule,
  	HttpClientModule,
	RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
