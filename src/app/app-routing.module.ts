import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListproductComponent } from './products/listproduct/listproduct.component';
import { AddproductComponent } from './products/addproduct/addproduct.component';
import { ShowproductComponent } from './products/showproduct/showproduct.component';

const routes: Routes = [
{
	path:'products',
	component:ListproductComponent

},
{
	path:'products/add',
	component:AddproductComponent
},
{
	path:'products/:id',
	component:ShowproductComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
