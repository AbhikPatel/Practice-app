import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list-container',
  templateUrl: './employee-list-container.component.html',
  styleUrls: ['./employee-list-container.component.scss']
})
export class EmployeeListContainerComponent implements OnInit {

  public data$:Observable<EmployeeModel[]>;
  constructor(private service:EmployeeService) { 
    this.data$ = new Observable<EmployeeModel[]>();
  }

  ngOnInit(): void {
    this.data$ = this.service.getdata();
  }
  
  public getid(id:number){
    this.service.deletedata(id).subscribe(m => {
      alert('Data Deleted');
      this.data$ = this.service.getdata();
    });
  }

}
