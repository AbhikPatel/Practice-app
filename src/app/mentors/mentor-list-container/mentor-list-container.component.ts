import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { mentorsModel } from '../mentor.model';
import { MentorService } from '../mentor.service';

@Component({
  selector: 'app-mentor-list-container',
  templateUrl: './mentor-list-container.component.html',
  styleUrls: ['./mentor-list-container.component.scss'],
  // viewProviders:[MentorService],
})
export class MentorListContainerComponent implements OnInit {

  public getData$:Observable<mentorsModel[]>;
  constructor(private service:MentorService) { 
    this.getData$ = new Observable<mentorsModel[]>();
  }

  ngOnInit(): void {
    this.getData$ = this.service.getdata();
  }
  
  public emitFormData(data:mentorsModel){
    this.service.postdata(data).subscribe(() => {
      alert('Data Added');
      this.getData$ = this.service.getdata(); 
    })
  }
  
  public emitDeleteId(id:number){
    this.service.deletedata(id).subscribe(() => {
      this.getData$ = this.service.getdata(); 
    })
  }
}
