import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {ProductCrudComponent} from'./views/product-crud/product-crud.component';
import { ProductCreateComponent } from './componentes/product/product-create/product-create.component';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
{
        path: "",
        component:HomeComponent
},{
        path:"products",
        component: ProductCrudComponent
},{
        path:"product/create",
        component: ProductCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
