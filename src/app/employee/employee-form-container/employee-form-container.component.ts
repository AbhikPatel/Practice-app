import { Component, OnInit } from '@angular/core';
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
  constructor(private service:EmployeeService) { 
    this.data$ = new Observable<EmployeeModel>();
  }

  ngOnInit(): void {
    
  }

  public add(data:EmployeeModel){
    this.service.postdata(data).subscribe();
  }

}
