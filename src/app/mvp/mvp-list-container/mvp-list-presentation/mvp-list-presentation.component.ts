import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { mvpModel } from '../../mvp.model';
import { OverlayModel } from '../../overlay.model';
import { MvpListPresenterService } from '../mvp-list-presenter/mvp-list-presenter.service';

@Component({
  selector: 'app-mvp-list-presentation',
  templateUrl: './mvp-list-presentation.component.html',
  styleUrls: ['./mvp-list-presentation.component.scss'],
  viewProviders:[MvpListPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MvpListPresentationComponent implements OnInit {

  // Setting data 
  @Input() public set list(listdata: mvpModel[] | null){
    if(listdata){
      this._listdata = listdata;
    }
  }

  // Getting data 
  public get list():mvpModel[]{
    return this._listdata;
  }

  @Output() public emitdeleteid:EventEmitter<number>;

  public _listdata:mvpModel[];
  public filterdata:mvpModel[];

  constructor(private presenterservice:MvpListPresenterService, private route:Router, private cdr:ChangeDetectorRef) { 
    this.emitdeleteid = new EventEmitter<number>();  
  }

  ngOnInit(): void {
    
    this.presenterservice.deleteid$.subscribe(id => {
      this.emitdeleteid.emit(id)
    })

    this.presenterservice.overlaydata$.subscribe(data => {
      this._listdata =  this.filter(data);
      this.cdr.detectChanges();
    })
  }

  // On Delete Method 
  public ondelete(id:number){
    this.presenterservice.getdeleteid(id);
    
  }

  // On Edit Method 
  public onedit(id:number){
    this.route.navigateByUrl(`/mvp/edit/${id}`)
  }

  public openoverlay(){
    this.presenterservice.overlaydisplay();
  }

  public filter(data:OverlayModel){
    let filterdata = this._listdata.filter(item => {
      return item.gender == data.gender;
    })
    return filterdata;
  }
}
