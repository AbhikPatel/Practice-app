import { Component, OnInit } from '@angular/core';
import { MvpService } from '../mvp.service';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-mvp-form-container',
  templateUrl: './mvp-form-container.component.html',
  styleUrls: ['./mvp-form-container.component.scss']
})
export class MvpFormContainerComponent implements OnInit {

  constructor(private service:MvpService) { }

  ngOnInit(): void {
  }

  public post(data:UserModel){
    this.service.postdata(data).subscribe(m => {
      alert("Data Added")
    })
  }

}
