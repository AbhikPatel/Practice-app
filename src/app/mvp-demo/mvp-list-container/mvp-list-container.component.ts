import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MvpService } from '../mvp.service';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-mvp-list-container',
  templateUrl: './mvp-list-container.component.html',
  styleUrls: ['./mvp-list-container.component.scss']
})
export class MvpListContainerComponent implements OnInit {

  public containernuobser$:Observable<UserModel[]>;
  constructor(private service:MvpService){ 
    this.containernuobser$ = new Observable<UserModel[]>()
  }

  ngOnInit(): void {
    this.containernuobser$ = this.service.getdata();
  }

  public ondelete(id:number){
    this.service.deletedata(id).subscribe(m => {
      alert("Data Deleted")
      this.containernuobser$ = this.service.getdata();
    })
  }


}
