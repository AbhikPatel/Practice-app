import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appUploadFile]'
})
export class UploadFileDirective {

  constructor() { }

  @HostListener('mouseover') public onMouse(){
    console.log('Hello');
  }

}
