import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { InsertComponent } from './insert/insert.component';
import { ProductListHeaderComponent } from './product-list-header/product-list-header.component';
import { ProductAddHeaderComponent } from './product-add-header/product-add-header.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';
import { UpdateHeaderComponent } from './update-header/update-header.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    InsertComponent,
    ProductListHeaderComponent,
    ProductAddHeaderComponent,
    LoginComponent,
    UpdateComponent,
    UpdateHeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
