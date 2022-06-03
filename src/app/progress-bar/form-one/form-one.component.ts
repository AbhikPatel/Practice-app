import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProgressService } from '../progress.service';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styles: [
  ]
})
export class FormOneComponent implements OnInit {

  constructor(private service:ProgressService) { 
    
  }

  ngOnInit(): void {
  }

  public onNext(){
    this.service.$getform1.next(1);
  }

}
