import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FileModel } from '../../File.model';

@Injectable()
export class FileUploadPresenterService {

  private file: FileModel;
  private _fileToUpload: Subject<FileModel>;
  public fileToUpload$: Observable<FileModel>;

  constructor() { 
    this.file = {} as FileModel;
    this._fileToUpload = new Subject<FileModel>();
    this.fileToUpload$ = new Observable<FileModel>();
    this.fileToUpload$ = this._fileToUpload.asObservable();
  }

  public uploadFile(file: File) {
    //size in mb
    let size = Math.round(file.size / 1024 / 1024)
    if (size <= 2) {
      this.file.name = file.name;
      this.file.size = size;
      this.file.type = file.type;
      if (this.file.type === "image/png" || "image/jpg" || "image/jpge") {
        console.log(file.type)
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
          this.file.content = event.target?.result as string;
          this._fileToUpload.next(this.file);
        };
      }
      else {
        alert("Please Select an img");
        return;
      }
    }
    else {
      alert("File Size is above 2mb")
    }
  }
}
