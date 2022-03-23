import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../../user.model';
import { MvpListPresenterService } from '../mvp-list-presenter/mvp-list-presenter.service';

@Component({
  selector: 'app-mvp-list-presentation',
  templateUrl: './mvp-list-presentation.component.html',
  styleUrls: ['./mvp-list-presentation.component.scss'],
  viewProviders:[MvpListPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MvpListPresentationComponent implements OnInit {

  @Input() public set listData(list:UserModel[] | null){
    if(list){
      this._listData = list;
    }
  }
  
  public get listData():UserModel[]{
    return this._listData;
  }

  @Output() deleteid:EventEmitter<number>;
  
  private _listData: UserModel[];

  constructor(private service:MvpListPresenterService, private route:Router) { 
    this.deleteid = new EventEmitter<number>()
  }

  ngOnInit(): void {
    this.service.deleteobs$.subscribe(m => {
      this.deleteid.emit(m);
    })
  }

  public ondelete(id:number){
    this.service.deleteser(id);
  }

  // public onedit(id:number){
  //   this.route.
  // }
}
