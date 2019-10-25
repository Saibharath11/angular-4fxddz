import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  public persondata = [];
  constructor(private myservice: MyserviceService) {}
   ngOnInit() {
      this.myservice.getData().subscribe((data) => {
         this.persondata = Array.from(Object.keys(data), k=>data[k]);
         console.log(this.persondata);
      });
   }
  
}
