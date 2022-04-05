import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DeletePopUpComponent } from 'src/app/shared/delete-pop-up/delete-pop-up.component';
import { mentorsModel } from '../../mentor.model';
import { MentorFilterPresentationComponent } from '../mentor-list-presentation/mentor-filter-presentation/mentor-filter-presentation.component';
import { MentorFormPresentationComponent } from '../mentor-list-presentation/mentor-form-presentation/mentor-form-presentation.component';

@Injectable({
  providedIn: 'root'
})
export class MentorListPresenterService {

  private formData:Subject<mentorsModel>;
  public formData$:Observable<mentorsModel>;

  private deleteId:Subject<number>;
  public deleteId$:Observable<number>;

  constructor(private overlay:Overlay) { 
    this.formData = new Subject<mentorsModel>();
    this.formData$ = this.formData.asObservable();
    
    this.deleteId = new Subject<number>();
    this.deleteId$ = this.deleteId.asObservable();
  }

  public openFormOverlay(data?:mentorsModel){ 
    let over = this.overlay.create({
      width:'1000px',
      hasBackdrop:true,
      positionStrategy:this.overlay.position().global().centerHorizontally().centerVertically()
    })

    const component = new ComponentPortal(MentorFormPresentationComponent)
    const compoentRef = over.attach(component);

    compoentRef.instance.emitFormData.subscribe((data) => {
      this.formData.next(data)
      over.detach();    
    })
    
    compoentRef.instance.closeData.subscribe((data) => {
      over.detach();
    })

    if(data){
      compoentRef.instance.edittoData = data;
    }

  }

  public openPopUp(id:number){
    let overlayRef = this.overlay.create({
      hasBackdrop:true,
      positionStrategy:this.overlay.position().global().centerHorizontally().centerVertically(),
    })

    const component = new ComponentPortal(DeletePopUpComponent)
    const componentRef = overlayRef.attach(component);

    componentRef.instance.emitNo.subscribe(() => {
      overlayRef.detach();
    })
    
    componentRef.instance.emitYes.subscribe(() => {
      this.deleteId.next(id);
      overlayRef.detach();
    })
  }

  public openFilter(){
    let overlayRef = this.overlay.create({
      width:'800px',
      hasBackdrop:true,
      positionStrategy: this.overlay.position().global().centerVertically().right(),
    })

    const component = new ComponentPortal(MentorFilterPresentationComponent)
    const componentRef = overlayRef.attach(component);

    componentRef.instance.emitFilterCancel.subscribe(() => {
      overlayRef.detach()
    })

    componentRef.instance.emitFilterData.subscribe(data => {
      
    })
  
  }
  
}
