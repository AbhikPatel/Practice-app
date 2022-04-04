import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FileModel } from '../../File.model';
import { FileUploadPresenterService } from '../file-upload-presenter/file-upload-presenter.service';

@Component({
  selector: 'app-file-upload-presentation',
  templateUrl: './file-upload-presentation.component.html',
  styleUrls: ['./file-upload-presentation.component.scss'],
  viewProviders:[FileUploadPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FileUploadPresentationComponent implements OnInit {

  public file: File;
  public startDate: string;
  public endDate: string;

  @Output() fileToUpload: EventEmitter<FileModel>;
  constructor(private service:FileUploadPresenterService) { 
    this.fileToUpload = new EventEmitter<FileModel>();
  }

  ngOnInit(): void {
    this.service.fileToUpload$.subscribe({
      next: (file) => {
        this.fileToUpload.emit(file);
      },
      error: (e) => { console.log(e) }
    })
  }

  readFile(files: any) {
    this.file = files.files[0];
  }

  uploadFile() {
    if (this.file) {
      this.service.uploadFile(this.file)
    }
    else {
      alert("No File is Selected")
    }
  }

  readStartDate(input:any){
    this.startDate = input.target.value;
  }

  readendDate(input:any){
    this.endDate = input.target.value;
  }

}
