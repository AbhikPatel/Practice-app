import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { mvpModel } from '../../mvp.model';

@Injectable()
export class MvpFormPresenterService {

  private adddata:Subject<mvpModel>;
  public adddata$:Observable<mvpModel>;
  constructor(private fb:FormBuilder) { 
    this.adddata = new Subject<mvpModel>();
    this.adddata$ = new Observable<mvpModel>();
    this.adddata$ = this.adddata.asObservable();
  }

  public getgroup(){
    return this.fb.group(
      {
        fname:['', Validators.required],
        age:['', Validators.required],
        phone:['', Validators.required],
        gender:['', Validators.required],
      }
    )
  }

  public getdata(data:mvpModel){
    this.adddata.next(data);
  }
}
