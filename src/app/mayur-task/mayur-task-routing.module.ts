import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MayurTaskComponent } from './mayur-task.component';

const routes: Routes = [{ path: '', component: MayurTaskComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MayurTaskRoutingModule { }
