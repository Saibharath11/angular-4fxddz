import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './sqrt.pipe';
import { MyserviceService } from './myservice.service';
@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, NewCmpComponent, ChangeTextDirective, SqrtPipe],
  bootstrap:    [ AppComponent ],
  providers: [MyserviceService]
})
export class AppModule { }
