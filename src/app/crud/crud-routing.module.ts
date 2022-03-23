import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudFormComponent } from './crud-form/crud-form.component';
import { CrudListComponent } from './crud-list/crud-list.component';
import { CrudComponent } from './crud.component';

const routes: Routes = [
  { path: '',
    children:[
      { path:'', redirectTo:'list', pathMatch:'full'},
      { path:'form', component:CrudFormComponent },
      { path:'list', component:CrudListComponent },
      { path:'edit/:id', component:CrudFormComponent },
    ]
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
