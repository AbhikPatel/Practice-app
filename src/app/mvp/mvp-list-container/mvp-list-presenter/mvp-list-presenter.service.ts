import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OverlayModel } from '../../overlay.model';
import { MvpOverlayPresentationComponent } from '../mvp-overlay-presentation/mvp-overlay-presentation.component';

@Injectable()
export class MvpListPresenterService {

  private deleteid:Subject<number>;
  public deleteid$:Observable<number>;

  private overlaydata:Subject<OverlayModel>;
  public overlaydata$:Observable<OverlayModel>;
  constructor(private overlay:Overlay) { 
    this.deleteid = new Subject<number>();
    this.deleteid$ = new Observable<number>();
    this.deleteid$ = this.deleteid.asObservable();

    this.overlaydata = new Subject<OverlayModel>();
    this.overlaydata$ = new Observable<OverlayModel>();
    this.overlaydata$ = this.overlaydata.asObservable();
  }

  public getdeleteid(id:number){
    this.deleteid.next(id); 
  }

  public overlaydisplay(){
   
    const overlayRef = this.overlay.create({
      width:'500px',
      height:'500px',
      hasBackdrop : true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
    });
    const component = new ComponentPortal(MvpOverlayPresentationComponent)
    const componentRef = overlayRef.attach(component);
    
    componentRef.instance.emitoverlaydata.subscribe(data => {
      if(data){
        this.overlaydata.next(data)
        overlayRef.detach();
      }
    })
  }
}
