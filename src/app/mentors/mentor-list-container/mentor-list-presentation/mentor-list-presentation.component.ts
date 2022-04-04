import { ChangeDetectionStrategy, Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { mentorsModel } from '../../mentor.model';
import { MentorListPresenterService } from '../mentor-list-presenter/mentor-list-presenter.service';

@Component({
  selector: 'app-mentor-list-presentation',
  templateUrl: './mentor-list-presentation.component.html',
  styleUrls: ['./mentor-list-presentation.component.scss'],
  viewProviders:[MentorListPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MentorListPresentationComponent implements OnInit {

  @Input() public set list(listData:mentorsModel[] | null){
    if(listData){
      this._listData = listData;
    }
  }

  public get list():mentorsModel[]{
    return this._listData;
  }

  @Output() public emitFormData:EventEmitter<mentorsModel>
  @Output() public emitDeleteId:EventEmitter<number>

  private _listData:mentorsModel[];
  constructor(private listservice:MentorListPresenterService) { 
    this.emitFormData = new EventEmitter<mentorsModel>();
    this.emitDeleteId = new EventEmitter<number>();

    
  }
  
  ngOnInit(): void {
    this.listservice.formData$.subscribe((data) => {
      this.emitFormData.emit(data);
      console.log(this.list.length);
    })

    this.listservice.deleteId$.subscribe((id) => {
      this.emitDeleteId.emit(id);
    })
  }

  public openForm(data?:mentorsModel){
    this.listservice.openFormOverlay(data);
  }

  public openDelete(id:number){
    this.listservice.openPopUp(id)
  }
}
