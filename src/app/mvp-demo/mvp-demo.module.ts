import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MvpDemoRoutingModule } from './mvp-demo-routing.module';
import { MvpDemoComponent } from './mvp-demo.component';
import { MvpFormContainerComponent } from './mvp-form-container/mvp-form-container.component';
import { MvpListContainerComponent } from './mvp-list-container/mvp-list-container.component';
import { MvpFormPresentationComponent } from './mvp-form-container/mvp-form-presentation/mvp-form-presentation.component';
import { MvpListPresentationComponent } from './mvp-list-container/mvp-list-presentation/mvp-list-presentation.component';
import { MvpService } from './mvp.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MvpDemoComponent,
    MvpFormContainerComponent,
    MvpListContainerComponent,
    MvpFormPresentationComponent,
    MvpListPresentationComponent
  ],
  imports: [
    CommonModule,
    MvpDemoRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[
    MvpService
  ]
})
export class MvpDemoModule { }
