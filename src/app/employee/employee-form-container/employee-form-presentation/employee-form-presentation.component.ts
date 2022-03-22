import { ChangeDetectionStrategy, Component, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { EmployeeModel } from '../../employee.model';
import { EmployeeFormPresenterService } from '../employee-form-presenter/employee-form-presenter.service';

@Component({
  selector: 'app-employee-form-presentation',
  templateUrl: './employee-form-presentation.component.html',
  styleUrls: ['./employee-form-presentation.component.scss'],
  viewProviders:[EmployeeFormPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class EmployeeFormPresentationComponent implements OnInit {

  @Output() public employeedata:EventEmitter<EmployeeModel>; 
  public employeegroup:FormGroup;

  constructor(private service:EmployeeFormPresenterService) {
    this.employeedata = new EventEmitter<EmployeeModel>(); 
    this.employeegroup = this.service.group();
  }

  ngOnInit(): void {
    this.service.dataobserve$.subscribe((m) => {
      this.employeedata.emit(m);
    })
  }

  public onsubmit(){
    this.service.adddata(this.employeegroup.value)
  }

}
