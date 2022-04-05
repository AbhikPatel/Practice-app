import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UploadFileModel } from '../../uploaddemo.model';
import { FileUploadPresenterService } from '../file-upload-presenter/file-upload-presenter.service';

@Component({
  selector: 'app-file-upload-presentation',
  templateUrl: './file-upload-presentation.component.html',
  styleUrls: ['./file-upload-presentation.component.scss'],
  viewProviders:[FileUploadPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FileUploadPresentationComponent implements OnInit {

  @Input() public set list(listdata:UploadFileModel[] | null){
    if(listdata){
      this._listdata = listdata;
    }
  }
  public get list():UploadFileModel[] | null{
    return this._listdata
  }
  @Output() public emitFileData:EventEmitter<UploadFileModel>;
  @Output() public emitFilename:EventEmitter<string>;
  public uploadFile:UploadFileModel;
  public fileData:File;
  private filename:string;
  private _listdata:UploadFileModel[];

  constructor(private service:FileUploadPresenterService) {
    this.emitFileData = new EventEmitter<UploadFileModel>();
    this.emitFilename = new EventEmitter<string>();
  }

  ngOnInit(): void {
    this.service.fileData$.subscribe({
      next:(data) => {
        this.emitFileData.emit(data)
      },
      error: (e) => { console.log(e); }
    })
  }

  public onChange(data:any){
    this.fileData = data.files[0];
    this.filename = this.fileData.name.split('.')[0];
  }

  public onUpload(){
    let output = this._listdata.find(items => {
      return items.name === this.filename;  
    })
    
    if(output){
      alert('This File already exits');
    }else{
      this.service.getFileData(this.fileData);
    }
  }
}
