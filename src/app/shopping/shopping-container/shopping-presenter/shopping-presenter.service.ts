import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CreatePresentationComponent } from '../shopping-presentation/create-presentation/create-presentation.component';
import { FinalPresentationComponent } from '../shopping-presentation/final-presentation/final-presentation.component';

@Injectable()
export class ShoppingPresenterService {

  private customerMail:Subject<string>;
  public customerMail$:Observable<string>;

  constructor(private overlay:Overlay) { 
    this.customerMail = new Subject();
    this.customerMail$ = this.customerMail.asObservable();
  }

  public openCreate(mail?:any){
    const Overlayref = this.overlay.create({
      hasBackdrop:true,
      height:'600px',
      width:'1200px',
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
    })

    const component = new ComponentPortal(CreatePresentationComponent);
    const componentRef = Overlayref.attach(component);

    componentRef.instance.emitSubmitData.subscribe((data) => {
      this.openView(mail);
      Overlayref.detach();
      this.customerMail.next(data);
    })
  }
  
  public openView(data?:any){
    debugger
    const Overlayref = this.overlay.create({
      hasBackdrop:true,
      height:'600px',
      width:'1200px',
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
    })

    const component = new ComponentPortal(FinalPresentationComponent);
    const componentRef = Overlayref.attach(component);

    componentRef.instance.customerData = data;
    
  }
}
