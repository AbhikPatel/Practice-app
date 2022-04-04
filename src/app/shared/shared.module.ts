import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletePopUpComponent } from './delete-pop-up/delete-pop-up.component';
import { FiledropzoneDirective } from './directives/filedropzone.directive';
import { UploadFileDirective } from './directives/upload-file/upload-file.directive';



@NgModule({
  declarations: [
    DeletePopUpComponent,
    FiledropzoneDirective,
    UploadFileDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DeletePopUpComponent,
    UploadFileDirective
  ]
})
export class SharedModule { }
