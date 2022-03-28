import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListContainerComponent } from './customer-list-container/customer-list-container.component';
import { CustomerComponent } from './customer.component';

const routes: Routes = [
  { path: '', 
    children:[
      { path:'', redirectTo:'list', pathMatch:'full' },
      { path:'list', component:CustomerListContainerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
