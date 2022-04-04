import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UploadFileModel } from '../../uploaddemo.model';

@Injectable()
export class FileUploadPresenterService {

  private fileData:Subject<UploadFileModel>;
  public fileData$:Observable<UploadFileModel>;
  constructor() { 
    this.fileData = new Subject<UploadFileModel>();
    this.fileData$ = this.fileData.asObservable();
  }

  public getFileData(file:UploadFileModel){
    this.fileData.next(file)
  }
}
