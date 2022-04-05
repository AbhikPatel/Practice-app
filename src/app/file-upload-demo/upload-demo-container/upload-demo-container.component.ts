import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FiledemoService } from '../filedemo.service';
import { UploadFileModel } from '../uploaddemo.model';

@Component({
  selector: 'app-upload-demo-container',
  templateUrl: './upload-demo-container.component.html',
  styleUrls: ['./upload-demo-container.component.scss'],
})
export class UploadDemoContainerComponent implements OnInit {

  public getFileData$:Observable<UploadFileModel[]>;
  constructor(private service:FiledemoService) { 
    this.getFileData$ = new Observable<UploadFileModel[]>();
  }

  ngOnInit(): void {
    this.getFileData$ = this.service.getData();
  }
  
  public emitFileData(file:UploadFileModel){
    this.service.postdata(file).subscribe({
      next:() => {
        alert('File Added')
        this.getFileData$ = this.service.getData();
      },
      error:(e) => { console.log(e); }
    })
  }
  
  public emitDeleteId(id:number){
    this.service.deleteData(id).subscribe(() => {
      alert('Files Removed')
      this.getFileData$ = this.service.getData();
    })
  }

}

/*
SCSS Assessment

Overlay
Bootstrap Demo

Sidebar : 

Shreya
Drap & Drop
ngTemplate
Pagination

Abhishek
File Upload
Filter, Sorting
MVP
Overlay
*/