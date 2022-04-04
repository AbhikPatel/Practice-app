import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileModel } from '../File.model';
import { FilesService } from '../files.service';

@Component({
  selector: 'app-file-upload-container',
  templateUrl: './file-upload-container.component.html',
  styleUrls: ['./file-upload-container.component.scss']
})
export class FileUploadContainerComponent implements OnInit {

  public filesList$: Observable<FileModel[]>
  constructor(private service: FilesService) { 
    this.filesList$ = new Observable<FileModel[]>();
  }

  ngOnInit(): void {
    this.filesList$ = this.service.getAllFiles();
  }

  public UploadFile(file: FileModel) {
    this.service.addFile(file).subscribe({
      next: () => {
        alert("File Added");
        this.filesList$ = this.service.getAllFiles();
      },
      error: (e) => { console.log(e) }
    })
  } 

}
