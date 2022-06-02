import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: []
})
export class PrescriptionComponent implements OnInit {

  public routing:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public onroute(){
    if(this.routing){
      this.routing = false
    }else{
      this.routing = true
    }
  }

}
