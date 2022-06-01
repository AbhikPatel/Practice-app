import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cardDemoModel } from './cardDemo.model';

@Injectable({
  providedIn: 'root'
})
export class CardDemoService {

  api:string = 'http://localhost:3000/';

  constructor(private http:HttpClient) { }

  public getData():Observable<cardDemoModel[]>{
    return this.http.get<cardDemoModel[]>(`${this.api}database`)
  }

  public getDemo():Observable<any[]>{
    return this.http.get<any[]>(`${this.api}demo`)
  }
}
