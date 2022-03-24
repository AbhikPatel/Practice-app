import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { MvpRoutingModule } from './mvp-routing.module';
import { MvpComponent } from './mvp.component';
import { MvpFormContainerComponent } from './mvp-form-container/mvp-form-container.component';
import { MvpListContainerComponent } from './mvp-list-container/mvp-list-container.component';
import { MvpFormPresentationComponent } from './mvp-form-container/mvp-form-presentation/mvp-form-presentation.component';
import { MvpListPresentationComponent } from './mvp-list-container/mvp-list-presentation/mvp-list-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MvpService } from './mvp.service';
import { MvpOverlayPresentationComponent } from './mvp-list-container/mvp-overlay-presentation/mvp-overlay-presentation.component';


@NgModule({
  declarations: [
    MvpComponent,
    MvpFormContainerComponent,
    MvpListContainerComponent,
    MvpFormPresentationComponent,
    MvpListPresentationComponent,
    MvpOverlayPresentationComponent
  ],
  imports: [
    CommonModule,
    MvpRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    OverlayModule
  ],
   providers:[
     MvpService
   ]
})
export class MvpModule { }
