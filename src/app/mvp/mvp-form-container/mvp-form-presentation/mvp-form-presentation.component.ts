import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { mvpModel } from '../../mvp.model';
import { MvpFormPresenterService } from '../mvp-form-presenter/mvp-form-presenter.service';

@Component({
  selector: 'app-mvp-form-presentation',
  templateUrl: './mvp-form-presentation.component.html',
  styleUrls: ['./mvp-form-presentation.component.scss'],
  viewProviders:[MvpFormPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MvpFormPresentationComponent implements OnInit {

  @Input() public set patching(data:mvpModel | null){
    if(data){
      this.mvpgroup.patchValue(data);
      this._data = data;
      this.editmode = true;
      this.formhead = 'Update User'
    }
  }

  public get patching():mvpModel{
    return this._data;
  }

  @Output() public emitadddata:EventEmitter<mvpModel>;
  @Output() public emiteditdata:EventEmitter<mvpModel>;

  public mvpgroup:FormGroup;
  public _data:mvpModel;
  public editmode:boolean;
  public formhead = 'Add User';

  constructor(private formservice:MvpFormPresenterService) { 
    this.mvpgroup = this.formservice.getgroup();
    this.emitadddata = new EventEmitter<mvpModel>();
    this.emiteditdata = new EventEmitter<mvpModel>();
  }

  ngOnInit(): void {
    this.formservice.adddata$.subscribe(data => { 
      this.editmode === true ? this.emiteditdata.emit(data) : this.emitadddata.emit(data);
    })
  }

  public onsubmit(){
    this.formservice.getdata(this.mvpgroup.value);
  }

}
