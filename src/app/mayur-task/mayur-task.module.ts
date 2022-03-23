import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MayurTaskRoutingModule } from './mayur-task-routing.module';
import { MayurTaskComponent } from './mayur-task.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './task.service';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    MayurTaskComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    MayurTaskRoutingModule,
    HttpClientModule
  ],
  providers:[
    TaskService
  ]
})
export class MayurTaskModule { }
