import { Component, OnInit } from '@angular/core';
import { Employee, JsModel } from './mayur.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-mayur-task',
  templateUrl: './mayur-task.component.html',
  styleUrls: ['./mayur-task.component.scss']
})
export class MayurTaskComponent implements OnInit {

  public data: JsModel[];
  constructor(private service: TaskService) { }

  ngOnInit(): void {
    this.getdata();
  }

  public getdata() {
    this.service.getdata().subscribe(m => this.data = m);
  }

  public above() {
    // let above18 = this.data.flatMap((item:JsModel)=>{
    //   return item.employee;
    // }).filter((item:Employee)=>{
    //   return item.age < 18;
    // }) 
    // console.log(above18);

    // let log = this.data.map((item: JsModel)=> {
    //   return item.employee = above18;
    // });
    // console.log(log)

    // let newdata = this.data.forEmap((item:JsModel)=>{
    //   return item.employee;
    // })

    //   let newData = this.data.map((item:JsModel)=>{

    //   })

    //  console.log(newData)

    let deps = this.data.map(dep => {
      let filteredDep = JSON.parse(JSON.stringify(dep));
      filteredDep.employee = filteredDep.employee.filter((emp: Employee) => {
        return emp.age < 18;
      });
      return filteredDep;
    })

    console.log(deps);

    this.data = deps;

  }
}
