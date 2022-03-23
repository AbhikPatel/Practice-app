import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo:'subject', pathMatch:'full' },
  { path: 'subject', loadChildren: () => import('./subject/subject.module').then(m => m.SubjectModule) },
  { path: 'mvp', loadChildren: () => import('./mvp-demo/mvp-demo.module').then(m => m.MvpDemoModule) },
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
  { path: 'dash', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'crud', loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) },
  { path: 'mayur', loadChildren: () => import('./mayur-task/mayur-task.module').then(m => m.MayurTaskModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
