import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  api:string = 'http://localhost:3000'
  constructor(private http:HttpClient) { }

  public getPharmacy():Observable<any[]>{
    return this.http.get<any[]>(`${this.api}/pharmacy`)
  }
}
