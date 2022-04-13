import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterDemoComponent } from './filter-demo.component';

const routes: Routes = [{ path: '', component: FilterDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilterDemoRoutingModule { }
