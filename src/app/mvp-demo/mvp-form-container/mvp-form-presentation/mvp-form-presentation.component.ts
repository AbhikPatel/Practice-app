import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  @Input() public set formdata(form:UserModel){
    // this.editdata = form;
    this.usergroup.patchValue(form);
  }

  public get formdata():UserModel{
    return this.editdata;
  }
  @Output() adddataemit:EventEmitter<UserModel>; 
  public usergroup:FormGroup;
  public editdata:UserModel;
  public getid:number
  constructor(private service:MvpFormPresenterService, private route:Router) {
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
    this.route.navigateByUrl(`/mvp/list`)
  }

}
