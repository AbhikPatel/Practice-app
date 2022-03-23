import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsModel } from './mayur.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  api:string = 'http://localhost:3000/data'
  constructor(private http:HttpClient) { }


  public getdata():Observable<JsModel[]>{
    return this.http.get<JsModel[]>(`${this.api}`)
  }
}
