import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { filterDemoModel } from '../filterDemo.model';

@Component({
  selector: 'app-filter-form-presentation',
  templateUrl: './filter-form-presentation.component.html',
  styleUrls: ['./filter-form-presentation.component.scss']
})
export class FilterFormPresentationComponent implements OnInit {

  public listdata:any | null;
  public emitCancel:EventEmitter<boolean>;
  public emitFilterData:EventEmitter<filterDemoModel>;
  public filterGroup:FormGroup
  constructor(private fb:FormBuilder) { 
    this.filterGroup = this.fb.group({
      fname:[''],
      age:[''],
      gender:[''],
      phone:[''],
      salary:[''],
      company:[''],
      city:[''],
    });

    this.emitCancel = new EventEmitter();
    this.emitFilterData = new EventEmitter();
  }

  ngOnInit(): void {
    if(this.listdata){
      this.filterGroup.patchValue(this.listdata);
    }
  }

  public onCancel(){
    this.emitCancel.emit();
  }
  
  public onSubmit(){
    this.emitFilterData.emit(this.filterGroup.value);
  }
}
