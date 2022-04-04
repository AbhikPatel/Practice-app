import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FileModel } from './File.model';


@Injectable()

export class FilesService {

  private api: string = "http://localhost:3000/files";
  constructor(private http:HttpClient) { }

  public getAllFiles(): Observable<FileModel[]> {
    return this.http.get<FileModel[]>(this.api);
  }

  public addFile(file: FileModel): Observable<FileModel> {
    return this.http.post<FileModel>(this.api, file);
  }
}
