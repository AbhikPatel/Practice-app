import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FiledemoService } from '../filedemo.service';
import { UploadFileModel } from '../uploaddemo.model';

@Component({
  selector: 'app-upload-demo-container',
  templateUrl: './upload-demo-container.component.html',
  styleUrls: ['./upload-demo-container.component.scss'],
  viewProviders:[FiledemoService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class UploadDemoContainerComponent implements OnInit {

  public getFileData$:Observable<UploadFileModel[]>;
  constructor(private service:FiledemoService) { 
    this.getFileData$ = new Observable<UploadFileModel[]>();
  }

  ngOnInit(): void {
    this.getFileData$ = this.service.getData();
  }

  public emitFileData(data:UploadFileModel){
    this.service.postdata(data).subscribe({
      next:() => {
        alert('File Added')
      },
      error:(e) => { console.log(e);
       }
    })
  }

}
