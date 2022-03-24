import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class MvpListPresenterService {

  private deleteid:Subject<number>;
  public deleteid$:Observable<number>;
  constructor() { 
    this.deleteid = new Subject<number>();
    this.deleteid$ = new Observable<number>();
    this.deleteid$ = this.deleteid.asObservable();
  }

  public getdeleteid(id:number){
    this.deleteid.next(id);
  }
}
