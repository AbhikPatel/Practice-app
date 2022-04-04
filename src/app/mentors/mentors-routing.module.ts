import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentorListContainerComponent } from './mentor-list-container/mentor-list-container.component';

const routes: Routes = [
  { path: '', 
    children:[
      { path:'', redirectTo:'list', pathMatch:'full'},
      { path:'list', component:MentorListContainerComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorsRoutingModule { }
