import { Component, OnInit } from '@angular/core';
import { ProgressService } from './progress.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: []
})
export class ProgressBarComponent implements OnInit {

  public status:number[];
  public currentPage:number = 1;
  constructor(private service:ProgressService) { 
    this.status = [1,2]
  }

  ngOnInit(): void {
    console.log(this.status.length);
    
  }

  ngOnChanges(){
    this.service.$getform1.subscribe((data) => {
      this.currentPage = data
    })
  }

}
