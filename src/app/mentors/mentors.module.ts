import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorsRoutingModule } from './mentors-routing.module';
import { MentorsComponent } from './mentors.component';
import { MentorListContainerComponent } from './mentor-list-container/mentor-list-container.component';
import { MentorFormPresentationComponent } from './mentor-list-container/mentor-list-presentation/mentor-form-presentation/mentor-form-presentation.component';
import { MentorFilterPresentationComponent } from './mentor-list-container/mentor-list-presentation/mentor-filter-presentation/mentor-filter-presentation.component';
import { MentorListPresentationComponent } from './mentor-list-container/mentor-list-presentation/mentor-list-presentation.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MentorService } from './mentor.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MentorsComponent,
    MentorListContainerComponent,
    MentorListPresentationComponent,
    MentorFormPresentationComponent,
    MentorFilterPresentationComponent
  ],
  imports: [
    CommonModule,
    MentorsRoutingModule,
    OverlayModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers:[
    MentorService
  ]
})
export class MentorsModule { }
