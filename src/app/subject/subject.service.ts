import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UserModel } from './models/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

   private _usersubject: Subject<UserModel>;
   public _editdata: Subject<UserModel>;
   public obserdata$:Observable<UserModel>;

  constructor() { 
    this._usersubject = new Subject<UserModel>();
    this._editdata = new Subject<UserModel>();
    this.obserdata$ = this._usersubject.asObservable();
  }

  public getdata(data:UserModel){
    this._usersubject.next(data);  
  }

  public editdata(data:UserModel){
    this._editdata.next(data);
  }

}
