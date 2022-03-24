import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MvpOverlayPresenterService } from '../mvp-overlay-presenter/mvp-overlay-presenter.service';

@Component({
  selector: 'app-mvp-overlay-presentation',
  templateUrl: './mvp-overlay-presentation.component.html',
  styleUrls: ['./mvp-overlay-presentation.component.scss'],
  viewProviders:[MvpOverlayPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MvpOverlayPresentationComponent implements OnInit {

  public overlaygroup:FormGroup;
  constructor(private service:MvpOverlayPresenterService) { 
    this.overlaygroup = this.service.addgroup();
  }

  ngOnInit(): void {
  }
  
  public onsubmit(){
    console.log(this.overlaygroup.value);
  }
}
