import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  api:string = 'http://localhost:3000/';

  constructor(private http:HttpClient) { }

  public postdata(data:EmployeeModel):Observable<EmployeeModel>{
    return this.http.post<EmployeeModel>(`${this.api}employees`,data);
  }

  public getdata():Observable<EmployeeModel[]>{
    return this.http.get<EmployeeModel[]>(`${this.api}employees`);
  }

  public deletedata(id:number):Observable<EmployeeModel>{
    return this.http.delete<EmployeeModel>(`${this.api}employees/${id}`);
  }

  public getbyid(id:number):Observable<EmployeeModel>{
    return this.http.get<EmployeeModel>(`${this.api}employees/${id}`);
  }

  public updatedata(data:EmployeeModel ,id:number):Observable<EmployeeModel>{
    return this.http.put<EmployeeModel>(`${this.api}employees/${id}`,data);
  }

  
}
