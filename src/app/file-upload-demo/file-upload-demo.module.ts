import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadDemoRoutingModule } from './file-upload-demo-routing.module';
import { FileUploadDemoComponent } from './file-upload-demo.component';
import { UploadDemoContainerComponent } from './upload-demo-container/upload-demo-container.component';
import { FileListPresentationComponent } from './upload-demo-container/file-list-presentation/file-list-presentation.component';
import { FileUploadPresentationComponent } from './upload-demo-container/file-upload-presentation/file-upload-presentation.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FileUploadDemoComponent,
    UploadDemoContainerComponent,
    FileListPresentationComponent,
    FileUploadPresentationComponent
  ],
  imports: [
    CommonModule,
    FileUploadDemoRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class FileUploadDemoModule { }
