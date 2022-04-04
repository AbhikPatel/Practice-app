import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadContainerComponent } from './file-upload-container/file-upload-container.component';
import { FileUploadComponent } from './file-upload.component';

const routes: Routes = [
  { path: '', 
    children:[
      { path:'', redirectTo:'list', pathMatch:'full' },
      { path:'list', component:FileUploadContainerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileUploadRoutingModule { }
