import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UserModel } from '../../user.model';

@Injectable({
  providedIn: 'root'
})
export class MvpListPresenterService {

  public deleteobs$:Observable<number>;
  private deletesub:Subject<number>;

  constructor() { 
    this.deleteobs$ = new Observable<number>();
    this.deletesub = new Subject<number>();
    this.deleteobs$ = this.deletesub.asObservable();
  }

  public deleteser(id:number){
    this.deletesub.next(id);
  }
}
