import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: []
})
export class PrescriptionComponent implements OnInit {

  public routing:boolean = true;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  public onroute(){
    if(this.routing){
      this.routing = false
      this.route.navigate(['/prescription/patient'])
    }else{
      this.routing = true
      this.route.navigate(['/prescription/pharmacy'])
    }
  }

}
