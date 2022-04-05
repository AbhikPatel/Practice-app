import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UploadFileModel } from '../../uploaddemo.model';
import { FileListPresenterService } from '../file-list-presenter/file-list-presenter.service';

@Component({
  selector: 'app-file-list-presentation',
  templateUrl: './file-list-presentation.component.html',
  styleUrls: ['./file-list-presentation.component.scss'],
  viewProviders:[FileListPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FileListPresentationComponent implements OnInit {

  @Input() public set list(listdata:UploadFileModel[] | null){
    if(listdata){
      this._listdata = listdata;
    }
  }
  public get list():UploadFileModel[] | null{
    return this._listdata
  }

  @Output() public emitDeleteId:EventEmitter<number>;
  private _listdata:UploadFileModel[];
  constructor(private service: FileListPresenterService) { 
    this.emitDeleteId = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  public onDelete(id:number){
    this.emitDeleteId.emit(id);
  }

  public onView(type:string, content:string){
    this.service.openFile(type, content)
  }
}
