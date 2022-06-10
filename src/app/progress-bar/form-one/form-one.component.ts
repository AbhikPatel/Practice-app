import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProgressService } from '../progress.service';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styles: [
  ]
})
export class FormOneComponent implements OnInit {

  public oneGroup: FormGroup;
  public para: boolean = true;
  public editData:any = '';
  constructor(private service: ProgressService, private fb: FormBuilder) {
    this.oneGroup = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
        lastName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      }
    )
  }
  
  ngOnInit(): void {
    this.service.formData.subscribe((data) => {
      if (data) {
        this.oneGroup.patchValue(data)
      }
    })
  }

  public onNext() {
    this.service.$getform1.next(2);
    this.service.formData.next(this.oneGroup.value);
  }

  public get getControls() {
    return this.oneGroup['controls'];
  }

}
