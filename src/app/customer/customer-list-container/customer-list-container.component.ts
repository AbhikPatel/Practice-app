import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CustomerData } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list-container',
  templateUrl: './customer-list-container.component.html',
  styleUrls: ['./customer-list-container.component.scss']
})
export class CustomerListContainerComponent implements OnInit {

  @Output() public editdata:EventEmitter<CustomerData>;
  
  public getdata$:Observable<CustomerData[]>;
  public _id:number;
  constructor(private service:CustomerService) { 
    this.getdata$ = new Observable<CustomerData[]>();
    this.editdata = new EventEmitter<CustomerData>();
  }

  ngOnInit(): void {
    this.getdata$ = this.service.getdata();
  }
  
  public addData(data:CustomerData){
    this.service.postdata(data).subscribe(() => {
      this.getdata$ = this.service.getdata();
      alert('Data Added')
    })
  }
  
  public DeleteData(id:number){
    this.service.deletedata(id).subscribe(() => {
      this.getdata$ = this.service.getdata();
      alert("Data Deleted");
    })
  }
  
  public update(data:CustomerData){
    this.service.upatedata(this._id,data).subscribe(() => {
      this.getdata$ = this.service.getdata();
      console.log(this._id);
      
      alert("Data Updataed");
    })
  }
}
