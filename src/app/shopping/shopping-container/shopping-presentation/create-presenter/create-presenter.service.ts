import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class CreatePresenterService {

  constructor(private fb:FormBuilder) { }

  public group(){
    return this.fb.group({
      pname:['',Validators.required],
      pprice:['',Validators.required],
      pcategory:['',Validators.required],
    })
  }
}
