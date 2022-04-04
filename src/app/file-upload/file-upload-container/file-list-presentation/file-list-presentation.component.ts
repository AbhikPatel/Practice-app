import { Component, OnInit, Input } from '@angular/core';
import { FileModel } from '../../File.model';

@Component({
  selector: 'app-file-list-presentation',
  templateUrl: './file-list-presentation.component.html',
  styleUrls: ['./file-list-presentation.component.scss']
})
export class FileListPresentationComponent implements OnInit {

  /** setter for user list */
  @Input() public set fileList(value: FileModel[] | null) {
    if (value) {
      this._fileList = value;
    }
  }
  public get fileList(): FileModel[] {
    return this._fileList;
  }

  private _fileList: FileModel[];
  constructor() { }

  ngOnInit(): void {
  }

}
