import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-form-container',
  templateUrl: './employee-form-container.component.html',
  styleUrls: ['./employee-form-container.component.scss']
})
export class EmployeeFormContainerComponent implements OnInit {
  
  public data$:Observable<EmployeeModel>;
  public id$:Observable<EmployeeModel>;
  private _id:number;
  constructor(private service:EmployeeService,private active:ActivatedRoute) { 
    this.data$ = new Observable<EmployeeModel>();
  }

  ngOnInit(): void {
    this._id = this.active.snapshot.params['id'];
    if(this._id){
      this.id$ = this.service.getbyid(this._id);
    }
  }

  public add(data:EmployeeModel){
    this.service.postdata(data).subscribe();
  }

  public edit(data:EmployeeModel){
    this.service.updatedata(data,this._id).subscribe();
  }

}
