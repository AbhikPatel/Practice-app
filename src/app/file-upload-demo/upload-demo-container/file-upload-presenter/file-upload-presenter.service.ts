import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UploadFileModel } from '../../uploaddemo.model';

@Injectable()
export class FileUploadPresenterService {

  private fileConvert:UploadFileModel;
  private fileData:Subject<UploadFileModel>;
  public fileData$:Observable<UploadFileModel>;
  constructor() { 
    this.fileData = new Subject<UploadFileModel>();
    this.fileData$ = this.fileData.asObservable();
    this.fileConvert = {} as UploadFileModel;
  }

  public getFileData(file:File){
    this.fileConvert.name = file.name.split('.')[0];
    this.fileConvert.size = Math.round(file.size/1024/1024);
    this.fileConvert.type = file.type

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      this.fileConvert.content = event.target?.result as string;      
      if(this.fileConvert.size <= 2){
        this.fileData.next(this.fileConvert);
      }else{
        alert("File is More than 2 MB.");
      }
    };
  }
}
