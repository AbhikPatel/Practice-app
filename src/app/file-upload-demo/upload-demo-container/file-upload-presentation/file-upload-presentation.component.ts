import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  @Output() public emitFileData:EventEmitter<UploadFileModel>
  public uploadFile:UploadFileModel;
  constructor(private service:FileUploadPresenterService) {
    this.emitFileData = new EventEmitter<UploadFileModel>();
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
    this.uploadFile = data.files[0]
  }

  public onUpload(){
    this.service.getFileData(this.uploadFile)
  }

}
