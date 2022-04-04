import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadDemoContainerComponent } from './upload-demo-container/upload-demo-container.component';

const routes: Routes = [
  { path: '',
    children:[
      { path:'', redirectTo:'list', pathMatch:'full'},
      { path:'list', component: UploadDemoContainerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileUploadDemoRoutingModule { }
