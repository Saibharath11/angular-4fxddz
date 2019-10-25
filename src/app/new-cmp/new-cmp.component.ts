import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {
  newcomponent = "Angular is new web application from which is going to be used extensively.";
  
  angularrel = ["version2","version3","version4","version5","version6","version7","version8"];
  ist = true;
  myClickFunction(event)
  {
    this.ist = !this.ist;
  }
  changeversions(event1)
  {
    alert("Version changed from the drop-down list");
    console.log(event1);
  }
  todayDate;
  constructor() { }
  ngOnInit() { 
      this.todayDate = this.myservice.showTodayDate(); 
   } 

}