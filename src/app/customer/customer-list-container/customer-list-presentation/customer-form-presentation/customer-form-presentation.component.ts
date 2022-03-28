import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CustomerData } from 'src/app/customer/customer.model';
import { CustomerFormPresenterService } from '../customer-form-presenter/customer-form-presenter.service';

@Component({
  selector: 'app-customer-form-presentation',
  templateUrl: './customer-form-presentation.component.html',
  styleUrls: ['./customer-form-presentation.component.scss'],
  viewProviders:[CustomerFormPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CustomerFormPresentationComponent implements OnInit {

  @Input() public editdata(data:CustomerData | null){
    if(data){
      this.customerGroup.patchValue(data);
      this.formhead = 'Update Customer';
    }
  }
  @Output() public emitAddData:EventEmitter<CustomerData>;
  @Output() public emiEditData:EventEmitter<CustomerData>;
  public formhead:string = 'Add Customer';
  public customerGroup:FormGroup;
  constructor(private service:CustomerFormPresenterService) { 
    this.customerGroup = this.service.group();
    this.emitAddData = new EventEmitter<CustomerData>();
    this.emiEditData = new EventEmitter<CustomerData>();
  }

  ngOnInit(): void {
    this.service.addData$.subscribe((data) => {
      this.formhead === 'Add Customer' ? this.emitAddData.emit(data) : this.emiEditData.emit(data);
    })
  }

  public onSubmit(){
    this.service.formdata(this.customerGroup.value)
  }

}
