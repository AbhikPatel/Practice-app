import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { mentorFilterModel } from 'src/app/mentors/mentorfilter.model';

@Injectable()
export class MentorFilterPresenterService {

  private filterData:Subject<mentorFilterModel>;
  public filterData$:Observable<mentorFilterModel>;
  
  constructor(private fb:FormBuilder) { 
    this.filterData = new Subject();
    this.filterData$ = this.filterData.asObservable()
  }

  public filterbuild(){
    return this.fb.group({
      fname:[''],
      lname:[''],
      age:[''],
      gender:[''],
    })
  }

  public getFormData(data:mentorFilterModel){
    this.filterData.next(data)
  }
}
