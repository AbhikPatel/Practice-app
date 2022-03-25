import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mvpModel } from './mvp.model';

@Injectable()
export class MvpService {

  // Api Link 
  private api:string = 'http://localhost:3000/mvpdata';
  
  constructor(private http:HttpClient) { }

  // Getting data from api 
  public getdata():Observable<mvpModel[]>{
    return this.http.get<mvpModel[]>(`${this.api}`);
  }

  // Deleting data by id 
  public deletedata(id:number):Observable<mvpModel>{
    return this.http.delete<mvpModel>(`${this.api}/${id}`);
  }

  // Adding Data 
  public postdata(data:mvpModel):Observable<mvpModel>{
    return this.http.post<mvpModel>(`${this.api}`,data);
  }

  // getting Data by id 
  public getbyid(id:number):Observable<mvpModel>{
    return this.http.get<mvpModel>(`${this.api}/${id}`);
  }

  public upatedata(id:number,data:mvpModel):Observable<mvpModel>{
    return this.http.put<mvpModel>(`${this.api}/${id}`,data);
  }
}
