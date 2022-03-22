import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeModel } from '../../employee.model';
import { EmployeeListPresenterService } from '../employee-list-presenter/employee-list-presenter.service';

@Component({
  selector: 'app-employee-list-presentation',
  templateUrl: './employee-list-presentation.component.html',
  styleUrls: ['./employee-list-presentation.component.scss'],
  viewProviders:[EmployeeListPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class EmployeeListPresentationComponent implements OnInit {

  @Input() public set listdata(list:EmployeeModel[] | null){
    
    if(list){
      this._listdata = list;
    }
  }

  public get listdata(){
    return this._listdata;
  }

  @Output() public delelteid:EventEmitter<number>;

  private _listdata:EmployeeModel[];
  public userlength:number;

  constructor(private service:EmployeeListPresenterService, private route:Router) { 
    this.delelteid = new EventEmitter<number>();
  }

  ngOnInit(): void {
    this.service.deleteid$.subscribe(m => this.delelteid.emit(m));
  }

  public ondelete(id:number){
    this.service.getdeleteid(id)
  }

  public onedit(id:number){
    this.route.navigateByUrl(`employee/edit/${id}`)
  }

}
