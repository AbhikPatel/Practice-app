import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrescriptionRoutingModule } from './prescription-routing.module';
import { PrescriptionComponent } from './prescription.component';
import { PharmacyListComponent } from './pharmacy-list/pharmacy-list.component';
import { PatientListComponent } from './patient-list/patient-list.component';


@NgModule({
  declarations: [
    PrescriptionComponent,
    PharmacyListComponent,
    PatientListComponent
  ],
  imports: [
    CommonModule,
    PrescriptionRoutingModule
  ]
})
export class PrescriptionModule { }
