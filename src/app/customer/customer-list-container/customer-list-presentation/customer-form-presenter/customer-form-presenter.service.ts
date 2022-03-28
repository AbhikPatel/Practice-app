import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { CustomerData } from 'src/app/customer/customer.model';

@Injectable()
export class CustomerFormPresenterService {

  private addData:Subject<CustomerData>;
  public addData$:Observable<CustomerData>;
  constructor(private fb:FormBuilder) { 
    this.addData = new Subject<CustomerData>();
    this.addData$ = new Observable<CustomerData>();
    this.addData$ = this.addData.asObservable();
  }

  public group(){
    return this.fb.group({
      fname:['',Validators.required],
      phone:['',Validators.required],
      age:['',Validators.required],
      city:['',Validators.required],
      gender:['',Validators.required],
    })
  }

  public formdata(data:CustomerData){
    this.addData.next(data);
  }
}
