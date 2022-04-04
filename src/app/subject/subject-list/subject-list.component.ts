import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/subject.model';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {

  public datalist:UserModel[] = [];
  public activedata:UserModel;
  public activeid:number;
  public editmode:boolean;
  public user = new  UserModel(15,54);

  constructor(private service:SubjectService) {
  }
  
  ngOnInit(): void {
    this.display();
    console.log(this.user);
  }

  public display(){
    this.service.obserdata$.subscribe(m => {
      if(this.editmode){
        this.datalist[this.activeid] = m;
      }
      else{
        this.datalist.push(m);
      }
    })
  }

  public ondelete(id:number){
    this.datalist.splice(id,1)
  }

  public onedit(id:number){
    this.activedata = this.datalist[id];
    this.service._editdata.next(this.activedata);
    this.editmode = true;
    this.activeid = id;
  }
}
