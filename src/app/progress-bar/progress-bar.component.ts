import { Component, OnInit } from '@angular/core';
import { ProgressService } from './progress.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: []
})
export class ProgressBarComponent implements OnInit {

  public status:number[];
  constructor(private service:ProgressService) { 
    this.status = [1];
  }
  
  ngOnInit(): void {
  }

  ngAfterContentInit(){
    this.service.$getform1.subscribe((data) => {
      this.status.push(data)
    })
    
    this.service.$previous.subscribe((data) => {
      if(this.status.includes(data)){
        this.status.pop();
      }
    })
    
    this.status = [...new Set(this.status)]
    console.log(this.status);
  }
}
