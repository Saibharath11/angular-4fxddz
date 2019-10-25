import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  todayDate;
  constructor(private myservice: MyserviceService){}
  ngOnInit()
  {
    this.todayDate = this.myservice.showTodayDate();
    console.log(this.myservice.serviceproperty);
    this.myservice.serviceproperty = "componentcreated";
    this.componentproperty = this.myservice.serviceproperty;

  }
  
}
