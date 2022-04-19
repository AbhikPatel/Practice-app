import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingPresentationComponent } from './shopping-container/shopping-presentation/shopping-presentation.component';

const routes: Routes = [
  { path: '', 
    children:[
      { path:'', redirectTo:'product', pathMatch:'full' },
      { path:'product', component:ShoppingPresentationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
