import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  public $getform1:Subject<number>;
  public $previous:Subject<number>;
  public formData:Subject<any>
  constructor() { 
    this.$getform1 = new Subject();
    this.$previous = new Subject();
    this.formData = new Subject();
  }
}
