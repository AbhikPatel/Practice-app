import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PharmacyListComponent } from './pharmacy-list/pharmacy-list.component';
import { PrescriptionComponent } from './prescription.component';

const routes: Routes = [
  { path: '', component: PrescriptionComponent,
    children:[
      {
         path:'', redirectTo:'pharmacy', pathMatch:'full'
      },
      {
         path:'pharmacy', component:PharmacyListComponent
      },
      {
         path:'patient', component:PatientListComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrescriptionRoutingModule { }
