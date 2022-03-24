import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { mvpModel } from '../../mvp.model';
import { MvpListPresenterService } from '../mvp-list-presenter/mvp-list-presenter.service';
import { MvpOverlayPresentationComponent } from '../mvp-overlay-presentation/mvp-overlay-presentation.component';

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
      let fil = this._listdata.forEach(items => {
        return items.gender = 'Male';
      })
      console.log(fil);
    }
  }

  // Getting data 
  public get list():mvpModel[]{
    return this._listdata;
  }

  @Output() public emitdeleteid:EventEmitter<number>;

  public _listdata:mvpModel[];
  public filterdata:mvpModel[];

  constructor(private presenterservice:MvpListPresenterService, private route:Router, private overlay:Overlay) { 
    this.emitdeleteid = new EventEmitter<number>()
  }

  ngOnInit(): void {
    this.presenterservice.deleteid$.subscribe(id => {
      this.emitdeleteid.emit(id)
    })
    this.filter();
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
    let config = new OverlayConfig();
    config.hasBackdrop = true;
    config.positionStrategy = this.overlay.position().global().centerVertically().right();
    const overlayRef = this.overlay.create(config);
    const component = new ComponentPortal(MvpOverlayPresentationComponent)
    const componentRef = overlayRef.attach(component);

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    });
  }

  public filter(){
    
    
  }
}
