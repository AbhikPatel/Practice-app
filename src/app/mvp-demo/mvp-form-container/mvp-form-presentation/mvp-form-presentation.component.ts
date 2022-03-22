import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserModel } from '../../user.model';
import { MvpFormPresenterService } from '../mvp-form-presenter/mvp-form-presenter.service';

@Component({
  selector: 'app-mvp-form-presentation',
  templateUrl: './mvp-form-presentation.component.html',
  styleUrls: ['./mvp-form-presentation.component.scss'],
  viewProviders:[MvpFormPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MvpFormPresentationComponent implements OnInit {

  @Output() adddataemit:EventEmitter<UserModel>; 
  public usergroup:FormGroup;
  constructor(private service:MvpFormPresenterService) {
    this.adddataemit = new EventEmitter<UserModel>(); 
  }
  
  ngOnInit(): void {
    this.usergroup = this.service.bob();
    this.service.addobser$.subscribe(m => {
      this.adddataemit.emit(m)
    })
  }

  public onsubmit(){
    this.service.adddata(this.usergroup.value)
  }

}
