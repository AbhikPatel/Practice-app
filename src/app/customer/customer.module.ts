import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerListContainerComponent } from './customer-list-container/customer-list-container.component';
import { CustomerListPresentationComponent } from './customer-list-container/customer-list-presentation/customer-list-presentation.component';
import { CustomerFormPresentationComponent } from './customer-list-container/customer-list-presentation/customer-form-presentation/customer-form-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';
import { CustomerService } from './customer.service';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerListContainerComponent,
    CustomerListPresentationComponent,
    CustomerFormPresentationComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, 
    OverlayModule
  ],
  providers:[
    CustomerService
  ]
})
export class CustomerModule { }
