import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarRoutingModule } from './progress-bar-routing.module';
import { ProgressBarComponent } from './progress-bar.component';
import { FormOneComponent } from './form-one/form-one.component';
import { FormTwoComponent } from './form-two/form-two.component';
import { FormThreeComponent } from './form-three/form-three.component';
import { FormFourComponent } from './form-four/form-four.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProgressBarComponent,
    FormOneComponent,
    FormTwoComponent,
    FormThreeComponent,
    FormFourComponent
  ],
  imports: [
    CommonModule,
    ProgressBarRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProgressBarModule { }
