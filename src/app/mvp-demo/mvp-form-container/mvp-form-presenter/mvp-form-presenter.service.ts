import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { UserModel } from '../../user.model';

@Injectable({
  providedIn: 'root'
})
export class MvpFormPresenterService {

  public addobser$:Observable<UserModel>;
  private addsubject:Subject<UserModel>;
  constructor(private fb:FormBuilder) { 
    this.addobser$ = new Observable<UserModel>();
    this.addsubject = new Subject<UserModel>();
    this.addobser$ = this.addsubject.asObservable();
  }

  public bob():FormGroup{
    return this.fb.group(
      {
        fname:['',Validators.required],
        age:['',Validators.required],
        phone:['',Validators.required],
        gender:['',Validators.required]
      }
    )
  }

  public adddata(data:UserModel){
    this.addsubject.next(data);
  }
}
