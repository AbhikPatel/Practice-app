import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { mentorsModel } from 'src/app/mentors/mentor.model';

@Injectable()
export class MentorFormPresenterService {

  private formData:Subject<mentorsModel>;
  public formData$:Observable<mentorsModel>;
  constructor(private fb:FormBuilder) { 
    this.formData = new Subject<mentorsModel>();
    this.formData$ = this.formData.asObservable();
  }

  public group(){
    return this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      age:['',Validators.required],
      phone:['',Validators.required],
      dob:['',Validators.required],
      department:['',Validators.required],
      mail:['',Validators.required],
      gender:['',Validators.required],
    })
  }

  public getData(data:mentorsModel){
    this.formData.next(data);
  }
}
