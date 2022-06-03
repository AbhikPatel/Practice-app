import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  public $getform1:Subject<number>;
  constructor() { 
    this.$getform1 = new Subject();
  }
}
