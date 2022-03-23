import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudModel } from './crud.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  api:string = 'http://localhost:3000/crud';

  constructor(private http:HttpClient) { }

  public getdata():Observable<CrudModel[]>{
    return this.http.get<CrudModel[]>(`${this.api}`);
  }

  public postdata(data:CrudModel):Observable<CrudModel>{
    return this.http.post<CrudModel>(`${this.api}`,data);
  }

  public updatedata(id:number,data:CrudModel):Observable<CrudModel>{
    return this.http.put<CrudModel>(`${this.api}/${id}`,data);
  }

  public getbyid(id:number):Observable<CrudModel>{
    return this.http.get<CrudModel>(`${this.api}/${id}`);
  }

  public deletedata(id:number):Observable<CrudModel>{
    return this.http.delete<CrudModel>(`${this.api}/${id}`);
  }
}
