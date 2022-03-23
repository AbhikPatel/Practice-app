import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MvpService } from '../mvp.service';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-mvp-form-container',
  templateUrl: './mvp-form-container.component.html',
  styleUrls: ['./mvp-form-container.component.scss']
})
export class MvpFormContainerComponent implements OnInit {

  public data:Observable<UserModel>;
  public getid:number
  constructor(private service:MvpService, private active:ActivatedRoute) { 
    this.data = new Observable<UserModel>()
    this.getid = this.active.snapshot.params['id']
    console.log(this.getid);
  }

  ngOnInit(): void {
    // this.get();
  }

  public add(data:UserModel){
    this.service.postdata(data).subscribe(m => {
      alert("Data Added")
    })
  }

// nngnhghgjhjjhfvbfjkjgfbgdchm tg hgfjhdfgbfdvsvc

}
