import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadFileModel } from './uploaddemo.model';

@Injectable()
export class FiledemoService {

  private api:string;
  constructor(private http:HttpClient) { 
    this.api = 'http://localhost:3000/files';
  }

  public postdata(file:UploadFileModel):Observable<UploadFileModel>{
    return this.http.post<UploadFileModel>(`${this.api}`,file)
  }

  public getData():Observable<UploadFileModel[]>{
    return this.http.get<UploadFileModel[]>(`${this.api}`)
  }

  public deleteData(id:number):Observable<UploadFileModel>{
    return this.http.delete<UploadFileModel>(`${this.api}/${id}`)
  }
}
