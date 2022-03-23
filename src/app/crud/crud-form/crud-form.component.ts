import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudModel } from '../crud.model';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.scss']
})
export class CrudFormComponent implements OnInit {

  crudgroup:FormGroup;
  getid:number;
  editmode:boolean;
  
  constructor(private fb:FormBuilder, public service:CrudService, private route:Router, private active:ActivatedRoute) { 
    this.crudgroup = this.groupinject();
    this.getid = this.active.snapshot.params['id'];
    if(this.getid){
      this.editmode = true;
    }
  }

  ngOnInit(): void {
    if(this.editmode){
      this.gettingid();
    }
  }

  public groupinject():FormGroup{
    return this.fb.group(
      {
        fname:['',Validators.required],
        age:['',Validators.required],
        phone:['',Validators.required],
        gender:['',Validators.required],
      }
    )
  }

  onsubmit(){
    this.editmode ? this.update() : this.savaData();

  }


  public savaData(){
    this.service.postdata(this.crudgroup.value).subscribe(() => {
      alert('Data Saved');
      this.route.navigateByUrl(`/crud/list`);
    });
  }

  public gettingid(){
    this.service.getbyid(this.getid).subscribe(m => {
      this.crudgroup.patchValue(m)
      console.log(m);
    })
  }
  
  public update(){
    this.service.updatedata(this.getid, this.crudgroup.value).subscribe(() => {
      this.route.navigateByUrl(`/crud/list`);
    })
  }
}
