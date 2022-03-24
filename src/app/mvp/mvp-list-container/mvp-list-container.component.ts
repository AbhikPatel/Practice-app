import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { mvpModel } from '../mvp.model';
import { MvpService } from '../mvp.service';

@Component({
  selector: 'app-mvp-list-container',
  templateUrl: './mvp-list-container.component.html',
  styleUrls: ['./mvp-list-container.component.scss']
})
export class MvpListContainerComponent implements OnInit {

  // Getting data as Observable 
  public data$: Observable<mvpModel[]>
  constructor(private mainservice: MvpService) {
    this.data$ = new Observable<mvpModel[]>()
  }

  ngOnInit(): void {
    // Calling method from main service 
    this.data$ = this.mainservice.getdata();  
  }
  
  public delete(id:number){
    this.mainservice.deletedata(id).subscribe(() => {
      alert('Data Deleted')
      this.data$ = this.mainservice.getdata();  
    })
  }

}
