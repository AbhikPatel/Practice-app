import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProgressService } from '../progress.service';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styles: [
  ]
})
export class FormTwoComponent implements OnInit {

  public secondGroup:FormGroup;
  constructor(private service:ProgressService, private fb:FormBuilder) { 
    this.secondGroup = this.fb.group(
      {
        mail:['',[Validators.required, Validators.email,Validators.maxLength(20)]],
        age:['',[Validators.required,Validators.maxLength(3)]],
        mobile:['',[Validators.required,Validators.minLength(10)]],
      }
    )
  }

  ngOnInit(): void {
    this.service.formData.subscribe((data) => {
      if(data){
        this.secondGroup.patchValue(data);
      }
    })
  }

  public onPrevious(){
    this.service.$previous.next(2);
  }

  public onNext(){
    this.service.$getform1.next(3);
    this.service.formData.next(this.secondGroup.value);
  }

  public get getControls(){
    return this.secondGroup['controls'];
  }
}
