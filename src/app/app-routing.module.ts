import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertComponent } from './insert/insert.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [{path:'',component:ProductListComponent},{path:'add',component:InsertComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
