import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertComponent } from './insert/insert.component';
import { ProductAddHeaderComponent } from './product-add-header/product-add-header.component';
import { ProductListHeaderComponent } from './product-list-header/product-list-header.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [{path:'',component:ProductListComponent,children:[{path:'',component:ProductListHeaderComponent,}]},{path:'add',component:InsertComponent,children:[{path:'',component:ProductAddHeaderComponent}]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
