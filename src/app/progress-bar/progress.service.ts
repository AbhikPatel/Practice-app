import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  public $getform1:Subject<number>;
  public $previous:Subject<number>;
  public formData:BehaviorSubject<any>;
  public allFormData:any[] = [];
  constructor() { 
    this.$getform1 = new Subject();
    this.$previous = new Subject();
    this.formData = new BehaviorSubject('');
  }

  public onFormNext(){
    this.formData.subscribe((data) => {
      this.allFormData.push(data);
    })
  }
}
