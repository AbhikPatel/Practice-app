import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadRoutingModule } from './file-upload-routing.module';
import { FileUploadComponent } from './file-upload.component';
import { FileUploadContainerComponent } from './file-upload-container/file-upload-container.component';
import { FileUploadPresentationComponent } from './file-upload-container/file-upload-presentation/file-upload-presentation.component';
import { FileListPresentationComponent } from './file-upload-container/file-list-presentation/file-list-presentation.component';
import { FilesService } from './files.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FileUploadComponent,
    FileUploadContainerComponent,
    FileUploadPresentationComponent,
    FileListPresentationComponent
  ],
  imports: [
    CommonModule,
    FileUploadRoutingModule,
    HttpClientModule,
    
  ],
  providers:[
    FilesService
  ]
})
export class FileUploadModule { }
