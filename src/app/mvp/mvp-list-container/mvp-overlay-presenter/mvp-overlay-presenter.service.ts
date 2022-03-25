import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { OverlayModel } from '../../overlay.model';

@Injectable()
export class MvpOverlayPresenterService {

  private overlaydata:Subject<OverlayModel>;
  public overlaydata$:Observable<OverlayModel>;
  constructor(private fb:FormBuilder) { 
    this.overlaydata = new Subject<OverlayModel>();
    this.overlaydata$ = new Observable<OverlayModel>();
    this.overlaydata$ = this.overlaydata.asObservable();
  }

  public addgroup(){
    return this.fb.group(
      {
        gender:['',Validators.required]
      }
    )
  }

  public getoverlaydata(data:OverlayModel){
    this.overlaydata.next(data);
  }
}
