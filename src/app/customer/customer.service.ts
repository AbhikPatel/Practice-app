import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerData } from './customer.model';

@Injectable()
export class CustomerService {

  private api:string = 'http://localhost:3000/customer';
  constructor(private http:HttpClient) { }

  // Getting data from api 
  public getdata():Observable<CustomerData[]>{
    return this.http.get<CustomerData[]>(`${this.api}`);
  }

  // Deleting data by id 
  public deletedata(id:number):Observable<CustomerData>{
    return this.http.delete<CustomerData>(`${this.api}/${id}`);
  }

  // Adding Data 
  public postdata(data:CustomerData):Observable<CustomerData>{
    return this.http.post<CustomerData>(`${this.api}`,data);
  }

  public upatedata(id:number,data:CustomerData):Observable<CustomerData>{
    return this.http.put<CustomerData>(`${this.api}/${id}`,data);
  }
}
