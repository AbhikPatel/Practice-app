import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterDemoRoutingModule } from './filter-demo-routing.module';
import { FilterDemoComponent } from './filter-demo.component';
import { FilterFormPresentationComponent } from './filter-form-presentation/filter-form-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';


@NgModule({
  declarations: [
    FilterDemoComponent,
    FilterFormPresentationComponent
  ],
  imports: [
    CommonModule,
    FilterDemoRoutingModule,
    ReactiveFormsModule,
    OverlayModule
  ]
})
export class FilterDemoModule { }
