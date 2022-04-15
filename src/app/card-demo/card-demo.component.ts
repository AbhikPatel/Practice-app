import { Component, OnInit } from '@angular/core';
import { CardDemoService } from './card-demo.service';
import { cardDemoModel } from './cardDemo.model';

@Component({
  selector: 'app-card-demo',
  templateUrl: './card-demo.component.html',
  styleUrls: ['./card-demo.component.scss']
})
export class CardDemoComponent implements OnInit {

  public toster = true;
  public filterData:string;
  public departmentData:cardDemoModel[] | null;
  constructor(private service:CardDemoService) { 
  }
  
  ngOnInit(): void {
    this.service.getData().subscribe(items => {
      this.departmentData = items
    })

    console.log(this.filterData);
  }
  
  ngDoCheck(){
    console.log(this.filterData);
  }

}
