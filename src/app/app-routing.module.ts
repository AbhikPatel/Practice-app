import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo:'subject', pathMatch:'full' },
  { path: 'subject', loadChildren: () => import('./subject/subject.module').then(m => m.SubjectModule) },
  { path: 'mvp', loadChildren: () => import('./mvp/mvp.module').then(m => m.MvpModule) },
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
  { path: 'mentors', loadChildren: () => import('./mentors/mentors.module').then(m => m.MentorsModule) },
  { path: 'file', loadChildren: () => import('./file-upload/file-upload.module').then(m => m.FileUploadModule) },
  { path: 'upload', loadChildren: () => import('./file-upload-demo/file-upload-demo.module').then(m => m.FileUploadDemoModule) },
  { path: 'filterDemo', loadChildren: () => import('./filter-demo/filter-demo.module').then(m => m.FilterDemoModule) },
  { path: 'prescription', loadChildren: () => import('./prescription/prescription.module').then(m => m.PrescriptionModule) },
  { path: 'progess', loadChildren: () => import('./progress-bar/progress-bar.module').then(m => m.ProgressBarModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
