import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class MvpOverlayPresenterService {

  constructor(private fb:FormBuilder) { 

  }

  public addgroup(){
    return this.fb.group(
      {
        gender:['',Validators.required]
      }
    )
  }
}
