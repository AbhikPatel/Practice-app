import { Component, Input, OnInit } from '@angular/core';
import { UploadFileModel } from '../../uploaddemo.model';

@Component({
  selector: 'app-file-list-presentation',
  templateUrl: './file-list-presentation.component.html',
  styleUrls: ['./file-list-presentation.component.scss']
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
  private _listdata:UploadFileModel[];
  constructor() { }

  ngOnInit(): void {
  }

}
