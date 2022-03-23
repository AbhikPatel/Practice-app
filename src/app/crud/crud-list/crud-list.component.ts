import { Component, OnInit } from '@angular/core';
import { CrudModel } from '../crud.model';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.scss']
})
export class CrudListComponent implements OnInit {

  datalist:CrudModel[];
  constructor(private service:CrudService) { }

  ngOnInit(): void {
    this.get();
  }

  public get(){
    this.service.getdata().subscribe(m => {
      this.datalist = m;
    });
  }

  public ondelete(id:number){
    this.service.deletedata(id).subscribe(() => {
      alert("Data has been deleted")
      this.get();
    })
  }

  public onedit(id:number){
  }
}
