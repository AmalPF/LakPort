import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Users } from '../users';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [DatePipe]
})
export class SignupComponent implements OnInit {

  userModel = new Users('Abcd','','','xyz','','','','','','',123,'');
  public islands = ["Kavaratti", "Mincoy", "Kalpeni"];

  constructor() {
   }

  ngOnInit() {
  }

  maximum_date() {
    let d:Date = new Date();
    console.log('Date is ready');
    return (d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear());   
  }

  islander() {
    //to make the island list visible.
  }

}
