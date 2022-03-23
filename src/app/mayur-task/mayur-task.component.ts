import { Component, OnInit } from '@angular/core';
import { JsModel } from './mayur.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-mayur-task',
  templateUrl: './mayur-task.component.html',
  styleUrls: ['./mayur-task.component.scss']
})
export class MayurTaskComponent implements OnInit {

  public data:JsModel[];
  constructor(private service:TaskService) { }

  ngOnInit(): void {
    this.getdata();
  }

  public getdata(){
    this.service.getdata().subscribe(m => this.data = m)
  }
}
