import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mentorsModel } from './mentor.model';

@Injectable()

export class MentorService {

  private api:string = 'http://localhost:3000/mentors';
  constructor(private http:HttpClient) { }

  // Getting data from api 
  public getdata():Observable<mentorsModel[]>{
    return this.http.get<mentorsModel[]>(`${this.api}`);
  }

  // Deleting data by id 
  public deletedata(id:number):Observable<mentorsModel>{
    return this.http.delete<mentorsModel>(`${this.api}/${id}`);
  }

  // Adding Data 
  public postdata(data:mentorsModel):Observable<mentorsModel>{
    return this.http.post<mentorsModel>(`${this.api}`,data);
  }

  public upatedata(id:number,data:mentorsModel):Observable<mentorsModel>{
    return this.http.put<mentorsModel>(`${this.api}/${id}`,data);
  }
}
