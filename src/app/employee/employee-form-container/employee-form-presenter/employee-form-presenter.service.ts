import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { EmployeeModel } from '../../employee.model';

@Injectable()

export class EmployeeFormPresenterService {

  private datasubject:Subject<EmployeeModel>;
  public dataobserve$:Observable<EmployeeModel>;

  constructor(private fb:FormBuilder) { 
    this.datasubject = new Subject<EmployeeModel>();
    this.dataobserve$ = new Observable<EmployeeModel>();
    this.dataobserve$ = this.datasubject.asObservable();
  }

  public group():FormGroup{
    return this.fb.group(
      {
        fname:['',Validators.required],
        age:['',Validators.required],
        phone:['',Validators.required],
        gender:['',Validators.required],
      }
    )
  }

  public adddata(data:EmployeeModel){
    this.datasubject.next(data);
  }
}
