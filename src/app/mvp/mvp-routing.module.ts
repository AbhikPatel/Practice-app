import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MvpFormContainerComponent } from './mvp-form-container/mvp-form-container.component';
import { MvpListContainerComponent } from './mvp-list-container/mvp-list-container.component';
import { MvpOverlayPresentationComponent } from './mvp-list-container/mvp-overlay-presentation/mvp-overlay-presentation.component';
import { MvpComponent } from './mvp.component';

const routes: Routes = [
  { path: '', 
    children:[
      { path:'', redirectTo:'list', pathMatch:'full'},
      { path:'form', component:MvpFormContainerComponent },
      { path:'list', component:MvpListContainerComponent },
      { path:'edit/:id', component:MvpFormContainerComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MvpRoutingModule { }
