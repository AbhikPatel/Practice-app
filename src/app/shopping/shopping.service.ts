import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ShoppingService {

  public api:string;
  constructor(private http: HttpClient) { 
    this.api = 'http://localhost:3000/';
  }

  public getByEmail(data:string):Observable<any>{
    return this.http.get<any>(`${this.api}customer/${data}`)
  }

}
