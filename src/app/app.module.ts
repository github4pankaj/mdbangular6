import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { UpdateComponent } from './update/update.component';
const routes: Routes = [
  { path: '', redirectTo: 'home' ,pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'updateProduct/:id', component: UpdateComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
