import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OverlayModel } from '../../overlay.model';
import { MvpOverlayPresenterService } from '../mvp-overlay-presenter/mvp-overlay-presenter.service';

@Component({
  selector: 'app-mvp-overlay-presentation',
  templateUrl: './mvp-overlay-presentation.component.html',
  styleUrls: ['./mvp-overlay-presentation.component.scss'],
  viewProviders:[MvpOverlayPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MvpOverlayPresentationComponent implements OnInit {

  @Output() emitoverlaydata:EventEmitter<OverlayModel>;
  public overlaygroup:FormGroup;
  public temdata:OverlayModel;
  constructor(private service:MvpOverlayPresenterService) { 
    this.overlaygroup = this.service.addgroup();
    this.emitoverlaydata = new EventEmitter<OverlayModel>();
    console.log(this.temdata);
    
  }

  ngOnInit(): void {
    this.service.overlaydata$.subscribe(data => {
      this.emitoverlaydata.emit(data);
    });
  }
  
  public onsubmit(){
    this.service.getoverlaydata(this.overlaygroup.value);
    this.temdata = this.overlaygroup.value
    console.log(this.temdata)
  }
}
