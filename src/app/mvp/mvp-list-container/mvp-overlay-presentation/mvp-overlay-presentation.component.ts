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
  constructor(private service:MvpOverlayPresenterService) { 
    this.overlaygroup = this.service.addgroup();
    this.emitoverlaydata = new EventEmitter<OverlayModel>();
  }

  ngOnInit(): void {
    this.service.overlaydata$.subscribe(data => {
      this.emitoverlaydata.emit(data);
      this.overlaygroup.patchValue(data);
    });
  }
  
  public onsubmit(){
    this.service.getoverlaydata(this.overlaygroup.value);
  }
}
