import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListPresenterService {

  private delidsubject:Subject<number>;
  public deleteid$:Observable<number>;

  constructor() { 
    this.delidsubject = new Subject<number>();
    this.deleteid$ = new Observable<number>();
    this.deleteid$ = this.delidsubject.asObservable();
  }

  public getdeleteid(id:number){
    this.delidsubject.next(id);
  }
}
