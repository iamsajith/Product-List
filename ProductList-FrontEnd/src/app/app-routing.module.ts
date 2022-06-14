import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InsertComponent } from './insert/insert.component';
import { LoginComponent } from './login/login.component';
import { ProductAddHeaderComponent } from './product-add-header/product-add-header.component';
import { ProductListHeaderComponent } from './product-list-header/product-list-header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateHeaderComponent } from './update-header/update-header.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [{path:'login',component:LoginComponent},{path:'',component:HomeComponent,children:[{path:'',component:ProductListComponent,children:[{path:'',component:ProductListHeaderComponent}]},
{path:'add',component:InsertComponent,children:[{path:'',component:ProductAddHeaderComponent}]},
{path:'update',component:UpdateComponent,children:[{path:'',component:UpdateHeaderComponent}]}
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
