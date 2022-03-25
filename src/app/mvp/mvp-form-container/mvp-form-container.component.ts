import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { mvpModel } from '../mvp.model';
import { MvpService } from '../mvp.service';

@Component({
  selector: 'app-mvp-form-container',
  templateUrl: './mvp-form-container.component.html',
  styleUrls: ['./mvp-form-container.component.scss']
})
export class MvpFormContainerComponent implements OnInit {

  public getdatabyid:Observable<mvpModel>;
  public getactiveid:number;
  constructor(private mainservice:MvpService, private active:ActivatedRoute, private route:Router) { 
    this.getactiveid = this.active.snapshot.params['id'];
    this.getdatabyid = new Observable<mvpModel>()
    if(this.getactiveid){
      this.getdatabyid = this.mainservice.getbyid(this.getactiveid)
    }
  }

  ngOnInit(): void {
  }

  public addingdata(data:mvpModel){
    this.mainservice.postdata(data).subscribe(() => {
      alert('Data Added');
      this.route.navigateByUrl(`/mvp/list`);
    })
  }

  public updatingdata(data:mvpModel){
    this.mainservice.upatedata(this.getactiveid,data).subscribe(() => {
      alert('Data Updated');
      this.route.navigateByUrl(`/mvp/list`);
    })
  }
}
