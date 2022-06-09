import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProgressService } from '../progress.service';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styles: [
  ]
})
export class FormOneComponent implements OnInit {

  public oneGroup:FormGroup;
  public para:boolean = true;
  constructor(private service:ProgressService, private fb:FormBuilder) { 
    this.oneGroup = this.fb.group(
      {
        first:['',Validators.required,Validators.minLength(5)],
        last:['',Validators.required],
      }
    )
  }

  ngOnInit(): void {
  }

  public onNext(){
    this.service.$getform1.next(2);
  }

  public get getControls(){
    return this.oneGroup['controls'];
  }

}
