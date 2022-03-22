import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class MvpService {

  public api = "http://localhost:3000/";

  constructor(private http:HttpClient) { }

  public getdata():Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${this.api}User`)
  }

  public postdata(data:UserModel):Observable<UserModel>{
    return this.http.post<UserModel>(`${this.api}User`,data)
  }

  public getbyid(id:number):Observable<UserModel>{
    return this.http.get<UserModel>(`${this.api}User/${id}`)
  }

  public updatadata(id:number,data:UserModel):Observable<UserModel>{
    return this.http.put<UserModel>(`${this.api}user/${id}`,data)
  }

  public deletedata(id:number):Observable<UserModel>{
    return this.http.delete<UserModel>(`${this.api}user/${id}`)
  }
}
