import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CustomerData } from '../../customer.model';
import { CustomerFormPresentationComponent } from '../customer-list-presentation/customer-form-presentation/customer-form-presentation.component';

@Injectable()
export class CustomerListPresenterService {

  private addData:Subject<CustomerData>;
  public addData$:Observable<CustomerData>;

  private editData:Subject<CustomerData>;
  public editData$:Observable<CustomerData>;
  constructor(private overlay:Overlay) { 
    this.addData = new Subject<CustomerData>();
    this.addData$ = new Observable<CustomerData>();
    this.addData$ = this.addData.asObservable();

    this.editData = new Subject<CustomerData>();
    this.editData$ = new Observable<CustomerData>();
    this.editData$ = this.editData.asObservable();
  }

  public open(data?:CustomerData){
    const over = this.overlay.create({
      hasBackdrop:true,
      positionStrategy:this.overlay.position().global().centerHorizontally().centerVertically(),
    });

    const component = new ComponentPortal(CustomerFormPresentationComponent);
    const overlayref = over.attach(component);

    over.backdropClick().subscribe(() => {
      over.detach();
    })
    
    overlayref.instance.emitAddData.subscribe(data => {
      over.detach();
      this.addData.next(data);
    })

    overlayref.instance.emiEditData.subscribe(data => {
      over.detach();
      this.editData.next(data);
    })

    if(data){
      overlayref.instance.editdata(data);
    }
  }
}
