import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrescriptionRoutingModule } from './prescription-routing.module';
import { PrescriptionComponent } from './prescription.component';
import { PharmacyListComponent } from './pharmacy-list/pharmacy-list.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PrescriptionService } from './prescription.service';


@NgModule({
  declarations: [
    PrescriptionComponent,
    PharmacyListComponent,
    PatientListComponent
  ],
  imports: [
    CommonModule,
    PrescriptionRoutingModule,
    HttpClientModule
  ],
  providers:[
    PrescriptionService
  ]
})
export class PrescriptionModule { }
