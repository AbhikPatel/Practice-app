import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss']
})
export class SubjectFormComponent implements OnInit {

  public usergroup:FormGroup;

  constructor(private fb:FormBuilder, private service:SubjectService) { 
    this.usergroup = this.group();
  }

  ngOnInit(): void {
    this.patch();
  }

  private group():FormGroup{
    return this.fb.group(
      {
        fname: ['', Validators.required],
        age: ['', Validators.required],
        phone: ['', Validators.required],
        gender: ['', Validators.required],
      }
    )
  }

  public onsubmit(){
    alert("Data has been saved");
    this.service.getdata(this.usergroup.value);
    this.usergroup.reset();
  }

  public patch(){
    this.service._editdata.subscribe(m => {
      this.usergroup.patchValue(m);
    })
  }
}
