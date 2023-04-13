import { Component } from '@angular/core';
import { Istd } from './shared/model/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inputOutputtask3';
  studentinfo:Array<Istd>=[
    {
      fname:"jhon",
      lname:"doe",
      email:"jd@gmail.com",
      contact:8564524
    }
  ]
  onaddstddata(data:Istd){
    console.log(data)
    this.studentinfo.push(data)
  }

}
